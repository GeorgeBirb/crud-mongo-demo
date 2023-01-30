const Course = require('../models/courseModel');

async function getCourses(req, res) {
    try{
        const courses = await Course.find().sort('name');
        res.send(courses);
    }catch(ex){
        console.log(ex.message);
        res.status(400).send(ex.message);    }
}

async function createCourse(req, res) {
    try {
        let course = new Course({ name: req.body.name, description: req.body.description });
        course = await course.save();
        console.log("The following object created : ", course);
        res.send(course);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
}

async function updateCourse(req, res) {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, { name: req.body.name, description: req.body.description },
            { new: true });
        console.log("The following object updated : ", course);
        res.send(course);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
}

async function deleteCourse(req, res) {
    try {
        const course = await Course.findByIdAndRemove(req.params.id);
        console.log("The following object deleted : ", course);
        res.send(course);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
}

async function getCourse(req, res) {
    try {
        const course = await Course.findById(req.params.id);
        console.log("The following object retrieved is : ", course);
        res.send(course);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
}

module.exports = { getCourses, createCourse, updateCourse, deleteCourse, getCourse };
