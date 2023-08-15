// require mongoose library
const mongoose = require('mongoose');
// connect it with database which is running in localhost
mongoose.connect('mongodb://localhost/Expense_db');

// check for connection
// connection is made by this function
const db = mongoose.connection;

// on error print it
db.on('error',console.error.bind(console,"Error"));

// on open call this func
db.once('open',function(){
    console.log("Successfully connected to DB");
});