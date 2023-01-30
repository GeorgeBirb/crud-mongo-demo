const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 18 },
  email: {
    type: String, required: true, set: v => v.toLowerCase(), unique: true
  }
});

UserSchema.pre('save', function (next) {
  if (this.age < 18) {
    const error = new Error('Age must be at least 18 years old');
    next(error);
  } else {
    next();
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;