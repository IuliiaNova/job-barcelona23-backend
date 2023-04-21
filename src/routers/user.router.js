const userRouter = require("express").Router();
const { signUp, getAllUsers, checkUser } = require('../controllers/user.controllers')

userRouter.post('/signup', signUp)
userRouter.get('/all', getAllUsers)
userRouter.post('/check', checkUser)
// change controller above
userRouter.get('/authorized', signUp)


module.exports = userRouter