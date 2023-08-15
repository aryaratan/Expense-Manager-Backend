const express = require('express');
const Router = express.Router();

const controllers = require("../controller");

Router.get('/',controllers.home);
Router.post('/add-expense',controllers.addExpense);
Router.delete('/delete-expense/',controllers.deleteExpense);
Router.get('/edit-expense/',controllers.editExpense);
Router.put('/update-expense/',controllers.updateExpense);

module.exports = Router;