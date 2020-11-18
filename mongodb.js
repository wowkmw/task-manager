// CRUD create read update delete
const {
    MongoClient,
    ObjectID
} = require('mongodb');

const connectionURL = 'mongodb://localhost:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id);
console.log(id.toHexString());

//async database connection  operation
MongoClient.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log('unable to connect to database!');
    }
    const db = client.db(databaseName);
    // db.collection('users').findOne({
    //     _id: new ObjectID("5fb36664ad310432c461e5cb")
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('unable to fetch user');
    //     }
    //     console.log(res);
    // });
    db.collection('users').find({
        age: 25
    }).toArray((err, res) => {
        if (err) {
            return console.log('unable to fetch user');
        }
        console.log(res);
    });
    db.collection('users').find({
        age: 25
    }).count((err, res) => {
        if (err) {
            return console.log('unable to fetch user');
        }
        console.log(res);
    });
});