const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;