const mongoose  = require('mongoose');


const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        require:true,
    },
    completed:{
        type:Boolean,
        require:false,
        default:false,
    }

},{
    timestamps: true
});

const taskModel = mongoose.model('tasks',taskSchema);


module.exports = taskModel;

