const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
      if (err) {
            return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');

      //docs.mongodb.com/manual/reference/operator/update
      db.collection("Todos").findOneAndUpdate({
            _id: new ObjectID('58ccbb6a70e3fb0751ba0684')
      }, {
            $set: {
                  completed: true
            }
      }, {
            returnOriginal: false
      }).then((res) => {
            console.log(res);
      }, (err) => {
            console.log('Could not fetch todos', err);
      });

      db.collection("Users").findOneAndUpdate({
            _id: 123
      }, {
            $set: {
                  name: 'Andrew'
            },
            $inc: {
                  age: 12
            }
      }, {
            returnOriginal: false
      }).then((res) => {
            console.log(res);
      }, (err) => {
            console.log('Could not fetch todos', err);
      });

      //db.close();
});
