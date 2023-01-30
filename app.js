const express = require('express');
const mongoose = require('./db');
const config = require('./config');
const usersRoute = require('./routes/usersRoute');
const coursesRoute = require('./routes/coursesRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/users', usersRoute);
app.use('/courses', coursesRoute);

mongoose(config);

app.listen(config.port, () => console.log(`Listening on port ${config.port}....`));

app.get('/', (req, res) => {
  res.send('Hello World!');
});