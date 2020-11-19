const mongoose = require('mongoose');
const validator = require('validator').default;

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error('Not a valid email address');
            }
        },
    },
    age: {
        type: Number,
        default: 0,
        validate(val) {
            if (val < 0) {
                throw new Error('Age must be a positive number');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        validate(val) {
            if (val.toLowerCase().includes('password')) {
                throw new Error('invalid password as it include the password word!');
            }
        },
        trim: true
    }
});

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const newTask = new Task({
    description: 'Learn MongoDB APIs',
    completed: false
});

newTask.save();

// const me = new User({
//     name: '  Kevin  ',
//     email: 'kevin123@GMail.com',
//     password: '    mynEEPASSWORDsamp     '
// });

// me.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log('Error!', err);
// });