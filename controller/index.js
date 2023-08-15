const Expense = require('../model');

module.exports.home = async (req, res) => {
    let income =0 , expense = 0;
    Expense.find().then(function(expenses){

        expenses.map((e) => {
            if(e.category === 'income'){
                income += e.amount;
            }
            else{
                expense += e.amount;
            }
        })
        // console.log(income, expense);
        return res.send({
            expenses,
            income,
            expense
        }
            
        );
    })
    
}

module.exports.addExpense = async (req, res) => {
    const {description, amount} = req.body;
    let expense = new Expense;
    expense.description = description;
    expense.amount = amount;
    if(amount < 0){
        expense.category = 'expense';
    }
    else{     
        expense.category = 'income';
    }
    const doc = await expense.save();
    res.redirect('back');
}

module.exports.deleteExpense = async (req, res) => {

    let id = req.query.id;
    await Expense.findOneAndDelete({_id:id});
    res.redirect('back');
}

module.exports.editExpense = async (req, res) => {
    let id = req.query.id;
    Expense.find({_id:id}).then(function(expense){
        // console.log(expense);
      
        return res.send({
           decs: expense[0].description,
            amt:  expense[0].amount,
        });
    })

}

module.exports.updateExpense = async (req, res) => {
    let id = req.query.id;
    const {description, amount} = req.body;
    let category = 'income';
    if(amount < 0){
        category = 'expense';
    }

    // Expense.find({_id:id}).then(function(expense){
    //     expense[0].description = description;
    //     expense[0].amount = amount;
    //     expense[0].category = category;
    //     const doc = expense.save();
    //     return res.redirect('back');
    // });
    Expense.updateOne({_id : req.params.id },{description, amount, category}).then(expnse =>{
        res.redirect('back');
    })
}   