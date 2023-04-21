const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const userRouter = require('./routers/user.router')
const authMiddleware = require("./middlewares/auth.middleware")

const app = express()

app.use(authMiddleware.jwtCheck)
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use('/user', userRouter)


module.exports = app