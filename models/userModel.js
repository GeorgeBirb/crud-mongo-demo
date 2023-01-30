const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 18 },
    email: {
        type: String, required: true, set: v => v.toLowerCase(), unique: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;