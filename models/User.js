const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,  // user must have a unique username
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,  // no two users can have the same email
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true  // password is required
    },
    role: {
      type: String,
      enum: ['user', 'admin'],  // only allow 'user' or 'admin' values
      default: 'user'
    }
  },
  { timestamps: true }  // adds createdAt and updatedAt fields automatically
);

module.exports = mongoose.model('User', UserSchema);
