const mongoose = require('mongoose');
//const validator = require('validator').default;

const Task = mongoose.model('Task', new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}));

module.exports = Task;