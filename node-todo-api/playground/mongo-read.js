const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('There was an error. Unable to connect to server');
  }

  console.log('Connected to MongoDB server');

  db.close();
});
