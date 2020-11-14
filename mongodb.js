//CRUD create read update delete
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'task-manager';

//async database connection  operation
MongoClient.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log('unable to connect to database!');
    }
    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     name: 'Jim',
    //     age: 29
    // });
});