const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/codeCrafters")

const userSchema = new mongoose.Schema({
  id:Number,
  username:String,
  name:String,
  email:String,
  password:String,
  number:Number,
  profilePic:String,
  joinIn:{
    type:Date,
    default:Date.now
  }
});

// Create the User model
const user = mongoose.model('user', userSchema);

// Export the User model
module.exports = user;