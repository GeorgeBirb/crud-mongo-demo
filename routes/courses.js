const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const Course = new mongoose.model('Course', new mongoose.Schema({
    name: { type: String, required: true },
    description: String
}));

router.get('/', async (req, res) => {
    const courses = await Course.find().sort('name');
    res.send(courses);
})

router.post('/', async (req, res) => {
    try {
        let course = new Course({ name: req.body.name, description: req.body.description })
        course = await course.save();
        console.log("The following object created : ", course);
        res.send(course);
    } catch (ex) {
        console.log(ex.message);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, { name: req.body.name, description: req.body.description },
            { new: true })
        console.log("The following object updated : ", course);
        res.send(course);
    } catch (ex) {
        console.log(ex.message);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const course = await Course.findByIdAndRemove(req.params.id)
        console.log("The following object deleted : ", course);
        res.send(course);
    } catch (ex) {
        console.log(ex.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        console.log("The following object retrieved is : ", course);
        res.send(course);
    } catch (ex) {
        console.log(ex.message);
    }
})

module.exports = router;