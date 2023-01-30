const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    photo: { type: String, required: true, default:'default.jpg' }
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;