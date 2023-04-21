const UserModel = require('../models/user.model')

const userWelcome = (req, res) => {
  try {
    res.status(200).send('GitHub social login implementaion')
  }catch (error){
    res.status(500).send({ message: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find()
    res.status(200).send({ data: users })
  }catch (error){
    res.status(500).send({ message: error.message })
  }
}

const findUser = async (accessToken, profile, done) => {
  let user = await UserModel.findOne({ githubId: profile.id});
  if(!user) {
  user = new UserModel({
    githubId: profile.id,
    username: profile.username,
    profileUrl:  profile.profileUrl,
    email: profile.emails[0].value,
    token: accessToken,
    avatarUrl: profile.photos[0].value
  });
  await user.save();
}
return done(null, user)
}


const addStar = async (req, res) => {
  try{
    const { repositoryName } = req.params;
    const user = req.user;

    if(user.hasStarRepo.includes(repositoryName)){
      return res.status(400).send({ message: 'You have already starred this repository'})
    }

    user.hasStarRepo.push(repositoryName);
    await user.save(); 

  }catch(error){
    res.status(500).send({ message: error.message })
  }
}

module.exports = {
  userWelcome, getAllUsers, findUser, addStar
}