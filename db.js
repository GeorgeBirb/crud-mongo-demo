const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

module.exports = (config) => {
  mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));
};