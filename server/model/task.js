const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:[true,"Please provide the name of the task"],
            max: [20,"length should not be more than 20"],
            trim: true,
        },
        description:{
            type: String,
            default: ''
        },

        completed: {
            type: Boolean,
            default: false
        },
        time: {
            type: Date,
        },
        
    }
)

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;