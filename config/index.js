
require('dotenv').config();

const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://pragyaratan:Pragya123@cluster0.aw13oxu.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true})
.then(()=>{
    console.log('connected to Database');
})
.catch((err)=>{
    console.log('Connection failed', err);
});


// const db = mongoose.connection;

// db.on('error',console.error.bind(console,"Error"));

// db.once('open',function(){
//     console.log("Successfully connected to DB");
// });