const express = require('express');
const router = express.Router();
const controller = require('../controllers/courseController');

router.get('/', controller.getCourses);

router.post('/', controller.createCourse);

router.put('/:id', controller.updateCourse);

router.delete('/:id', controller.deleteCourse);

router.get('/:id', controller.getCourse);

router.get('/attribute/:attribute/:value', controller.getCourseByAttribute);

module.exports = router;