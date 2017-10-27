const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('There was an error. Unable to connect to server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find({
    _id: new ObjectID('59f39b85964a0c25485d89b3')
  }).toArray().then((docs) => {
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').count().then((count) => {
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  // db.close();
});
