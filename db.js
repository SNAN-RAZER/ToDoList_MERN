const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017" ,{ useNewUrlParser: true });
const connection  = mongoose.connection;

connection.on('connected',()=>{
    console.log('MongoDb connected');
});

connection.on('error',(error)=>{
    console.log(`Error in connection to MongoDb ${error} `)
});

module.exports = connection;
