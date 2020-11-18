const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const me = new User({
    name: "Jim",
    age: '2rr9'
});

me.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log('Error!', err);
});