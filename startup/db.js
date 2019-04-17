const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb+srv://chirayu:asdf12345@cluster0-fy3uu.mongodb.net/test?retryWrites=true')
    .then(() => winston.info('Connected to MongoDB...'));
}
// mongodb://localhost/vidly

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://chirayu:asdf12345@cluster0-fy3uu.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("Vidly").collection("Movie Store");
//   // perform actions on the collection object
//   client.close();
// });
