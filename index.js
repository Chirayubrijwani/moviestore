const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);

// const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb+srv://chirayu:asdf12345@cluster0-fy3uu.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');

//   const collection = client.db("Vidly").collection("Movie Store");
  
//     collection.find({}).toArray((error, result) => {
//         if(error) {
//             // return response.status(500).send(error);
//             console.log("hogaya");
//         }
//         // response.send(result);
//         console.log("kya",result);
//     }); 

  

//   client.close();
// });

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));