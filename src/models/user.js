const mongoose = require('mongoose');
const validator = require('validator').default;

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

module.exports = User;