
require('dotenv').config();
// const DATABASE = process.env.DATABASE;
// console.log(DATABASE);
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE);


const db = mongoose.connection;

// on error print it
db.on('error',console.error.bind(console,"Error"));

// on open call this func
db.once('open',function(){
    console.log("Successfully connected to DB");
});