
require('dotenv').config();

const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE);


const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error"));

db.once('open',function(){
    console.log("Successfully connected to DB");
});