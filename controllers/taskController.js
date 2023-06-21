const taskModel = require('../models/taskModel');

//Add Task function 
const addtask = async (req,res)=>{
    try {
        const newTask = new taskModel(req.body);
        await newTask.save();
        return res.status(201).send({
            message:"Task Added successfully",
            success:true
        })
    } catch (error) {
        return res.status(500).send({
            messsage:`Error is ${error.message}`,
            success:false
        });

    }
};

//Get task function
const getTasks = async(req,res)=>{
    try {
        const tasks = await taskModel.find({});
        return res.status(200).send({
            message:`${tasks.length>0?(tasks.length >1?"Tasks":"task")+" found":"No tasks available"}`,
            success:true,
            data:tasks
        })
    } catch (error) {
        return res.status(500).send({
            messsage:`Error is ${error.message}`,
            success:false
        });
    }
}


//Delete a task function
const deleteTask = async(req, res)=>{
    try {
        const {_id:id} = req.body;
        const task = await taskModel.findOneAndDelete({_id:id});
        return res.status(200).send({
            message:`Task deleted`,
            success:true
        })
    } catch (error) {
        return res.status(500).send({
            messsage:`Error is ${error.message}`,
            success:false
        });
    }
}

//Function to update a task

const updateTask = async(req, res)=>{
    try {
        const {_id:id} = req.body;
        const task = await taskModel.findByIdAndUpdate({_id:id},{...req.body});
        return res.status(200).send({
            message:`Task Updated`,
            success:true
        })
    } catch (error) {
        return res.status(500).send({
            messsage:`Error is ${error.message}`,
            success:false
        });
    }
}

module.exports ={
    addtask,
    getTasks,
    deleteTask,
    updateTask
}

