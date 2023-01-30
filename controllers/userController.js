const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().sort('name');
        res.send(users);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
}

exports.postUser = async (req, res) => {
    try {
        let user = new User({ name: req.body.name, age: req.body.age, email: req.body.email })
        user = await user.save();
        console.log("The following object created : ", user);
        res.send(user);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
}

exports.putUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { name: req.body.name, age: req.body.age, email: req.body.email }, { new: true, runValidators: true });
        console.log("The following object updated : ", user);
        res.send(user);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        console.log("The following object deleted : ", user);
        res.send(user);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        console.log("The following object retrieved is : ", user);
        res.send(user);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
}

exports.getUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) return res.status(404).send("User not found");
        res.send(user.name);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
};

exports.putUserByEmail = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ email: req.params.email },
            { name: req.body.name, age: req.body.age, email: req.body.email },
            { new: true, runValidators: true });
        console.log("The following object updated : ", user);
        res.send(user);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
}

exports.getUserByAttribute = async (req, res) => {
    try {
        const attribute = req.params.attribute;
        const value = req.params.value;

        let query = {};
        query[attribute] = value;

        const user = await User.findOne(query);
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (ex) {
        console.log(ex.message);
        res.status(400).send(ex.message);
    }
};
