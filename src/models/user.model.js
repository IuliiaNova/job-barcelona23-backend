const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please put your name']
  },
  email: {
    type: String,
    required: [true, 'Please put your email']
  },
  picture: {
    type: String,
    required: [true, 'Please update your profile photo']
  }
})

const UserModel = model('User', UserSchema)

module.exports = UserModel