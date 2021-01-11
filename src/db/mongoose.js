const mongoose = require('mongoose');
const cmd = require('node-cmd');

const start = () => {
    const ddbStart = cmd.run('/Users/MKUO/Desktop/projects/backend/mongodb/bin/mongod.exe --dbpath=' +
        '/Users/MKUO/Desktop/projects/backend/mongoDatabase');
    console.log(ddbStart);

    mongoose.connect('mongodb://localhost:27017/task-manager-api', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
};

exports.start = start;