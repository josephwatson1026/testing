const mongoose = require("mongoose");

const UserSignInSchema = new mongoose.Schema({
  userId: {
    type: Number,
    default: 0
  },
  userName: {
    type: String,
    default: ""
  },
  fullName: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  },
  gender: {
    type: Boolean,
    default: 1
  },
  dateOfBirth: {
    type: Date,
    default: Date.now()
  },
  createdAt: {
    type: String,
    default: ""
  },
  countryCode: {
    type: Number,
    default: ""
  },
  userType: {
    type: Number,
    default: 0
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  creationIp: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("UserSignIn", UserSignInSchema);
