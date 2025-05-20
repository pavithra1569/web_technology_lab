const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  fullName: String,
  email: String,
  phoneNumber: String,
  dob: Date,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  country: String,
  artStyle: String,
});

module.exports = mongoose.model('User', userSchema);
