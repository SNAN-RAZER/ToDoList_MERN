const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT =  process.env.PORT || 6000; 


app.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})



