// models/User.js

import mongoose from 'mongoose';

let User;

try {
  User = mongoose.model('User');
} catch {
  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  User = mongoose.model('User', userSchema);
}

export default User;
