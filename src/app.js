const express = require('express')
const session = require('express-session')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const userRouter = require('./routers/user.router')
const ensureAuthenticated = require("./middlewares/auth.middleware")
const passport = require('passport')
const { findUser } = require('./controllers/user.controllers')
const UserModel = require('./models/user.model')
const GitHubStrategy = require('passport-github2').Strategy

require('dotenv').config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))


passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL
}, 
findUser
))

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findById(id);
  done(null, user)
})

app.use(passport.initialize());
app.use(passport.session());
app.use(ensureAuthenticated);
app.use('/user', userRouter);


module.exports = app