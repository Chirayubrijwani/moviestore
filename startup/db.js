const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb+srv://chirayu:asdf12345@cluster0-fy3uu.mongodb.net/test?retryWrites=true')
    .then(() => winston.info('Connected to MongoDB...'));
}

// Use below settings for local 
// mongodb://localhost/vidly

