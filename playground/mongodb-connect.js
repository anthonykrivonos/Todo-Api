//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

var obj = ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
      if (err) {
            return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');

      // db.collection('Todos').insertOne({
      //       text: 'Something to do',
      //       completed: false
      // }, (err, res) => {
      //       if (err) {
      //             return console.log('Unable to insert todo', err);
      //       }
      //       console.log(JSON.stringify(res.ops, undefined, 2));
      // });
      //
      // db.collection('Users').insertOne({
      //       _id: obj,
      //       name: 'Anthony',
      //       age: 18,
      //       location: '87-20 63 Ave.'
      // }, (err, res) => {
      //       if (err) {
      //             return console.log('Unable to insert user', err);
      //       }
      //       console.log(JSON.stringify(res.ops, undefined, 2));
      // })

      db.close();
});
