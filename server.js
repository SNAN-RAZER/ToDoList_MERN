const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT =  process.env.PORT || 6000; 
const db = require('./db');
const taskRouter = require('./routes/taskRoute');
app.use(express.json());
app.use('/api/v1/tasks/', taskRouter);


app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})



