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

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
});