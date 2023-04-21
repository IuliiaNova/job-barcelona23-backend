const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  githubId: String,
  username: String,
  profileUrl:  String,
  email: String,
  token: String,
  avatarUrl: String
  }
)

const UserModel = model('User', UserSchema)

module.exports = UserModel