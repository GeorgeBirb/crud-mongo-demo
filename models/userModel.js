const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true},
  email: {
    type: String, required: true, set: v => v.toLowerCase(), unique: true
  }
});

UserSchema.pre('save', function (next) {
  if (this.age < 18) {
    console.log('Attention! You are under 18 years old!! Take care!!');
  }
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;