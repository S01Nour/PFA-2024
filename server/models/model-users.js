// const mongoose = require('mongoose');
import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  org: String,
  dob: String
})

const users = mongoose.model('users', userSchema);

// var randSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   }
// })

// const randoms = mongoose.model('random', randSchema);

export default users;

// module.exports = users;