const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
});

const Task = mongoose.model('Task', tasksSchema)
module.exports = Task;
