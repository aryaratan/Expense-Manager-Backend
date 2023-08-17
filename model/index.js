const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    description : {
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
const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;