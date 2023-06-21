const express = require('express');
const taskModel = require('../models/taskModel');
const { addtask, getTasks, deleteTask, updateTask } = require('../controllers/taskController');
const taskRouter  = express.Router();


//Add a Task
taskRouter.post("/add-task", addtask);

//Get tasks
taskRouter.get("/get-tasks",getTasks);

//Delete  a Task
taskRouter.delete("/delete-task",deleteTask);

//Update a Task
taskRouter.put("/update-task",updateTask);

module.exports = taskRouter