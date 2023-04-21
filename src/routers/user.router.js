const userRouter = require("express").Router();
const { userWelcome, getAllUsers, addStar } = require('../controllers/user.controllers')
const passport = require('passport')

userRouter.get('/', userWelcome)
userRouter.get('/allusers', getAllUsers)
userRouter.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }))
userRouter.post('star/:repositoryName', addStar)

module.exports = userRouter