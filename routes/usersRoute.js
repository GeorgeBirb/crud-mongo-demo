const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers);

router.post('/', userController.postUser);

router.put('/:id', userController.putUser);

router.delete('/:id', userController.deleteUser);

router.get('/:id', userController.getUser);

router.get('/email/:email', userController.getUserByEmail);

router.put('/email/:email', userController.putUserByEmail);

router.get('/attribute/:attribute/:value', userController.getUserByAttribute);

module.exports = router;