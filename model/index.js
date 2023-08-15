const mongoose = require('mongoose');

// defining schema
// each entry is called document
const expenseSchema = new mongoose.Schema({
    // field 
    description : {
        // properties
        type : String,
        require: true
    },
    category: {
        type : String
    },
    amount: {
        type : Number,
        require:true
    }
},
{
    timestamps: true
});
// collection(of documets) name
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;