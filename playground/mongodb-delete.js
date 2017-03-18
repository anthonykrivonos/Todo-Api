const { MongoClient, ObjectId } = require('mongodb');

var obj = ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
      if (err) {
            return console.log('Unable to connect to MongoDB server');
      }
      console.log('Connected to MongoDB server');

      // // deleteMany
      // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
      //       console.log(res);
      // });
      //
      // // deleteOne
      // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
      //       console.log(res);
      // });
      //
      // // findOneAndDelete
      // db.collection('Todos').findOneAndDelete({completed: false}).then(res) => {
      //       console.log(res);
      // });

      db.collection('Users').deleteMany({name: 'Anthony'});

      db.collection('Todos').findOneAndDelete({_id: new ObjectID("58ccc0c19446a30962018807")}).then((res) => {
            console.log(JSON.stringify(res,undefined, 2));
      });

      //db.close();
});
