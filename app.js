const mongoose = require('mongoose');
const express = require('express');
const users = require('./routes/usersRoute')
const courses = require('./routes/coursesRoute')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/users', users);
app.use('/courses', courses);


try {
    mongoose.set('strictQuery', false);
} catch (e) {
    console.log('ERROR!!');
}

mongoose.connect('mongodb://0.0.0.0:27017/demo')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const port = process.env.PORT || 8080;    
app.listen(port, () => console.log(`Listening on port ${port}....`));

app.get('/', (req, res) => {
    res.send('Hello World!');
});