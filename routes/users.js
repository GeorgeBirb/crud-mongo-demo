const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const User = new mongoose.model('User', new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 18 },
    email: {
        type: String, required: true, set: v => v.toLowerCase(), unique: true
    }
}));

router.get('/', async (req, res) => {
    const users = await User.find().sort('name');
    res.send(users);
})

router.post('/', async (req, res) => {
    try {
        let user = new User({ name: req.body.name, age: req.body.age, email: req.body.email })
        user = await user.save();
        console.log("The following object created : ", user);
        res.send(user);
    } catch (ex) {
        console.log(ex.message);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { name: req.body.name, age: req.body.age, email: req.body.email },
            { new: true, runValidators: true }) 
        console.log("The following object updated : ", user);
        res.send(user);
    } catch (ex) {
        console.log(ex.message);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        console.log("The following object deleted : ", user);
        res.send(user);
    } catch (ex) {
        console.log(ex.message);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        console.log("The following object retrieved is : ", user);
        res.send(user);
    } catch (ex) {
        console.log(ex.message);
    }
})

module.exports = router;