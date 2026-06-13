import ExpenseRepository from './exprepository.js';
import ExpenseModel from './expModels.js';

class ExpensesController {
    constructor() {
        this.expenseRepository = new ExpenseRepository();
    }

    async showDashoard(req, res) {
        try {
            const email = req.email;

            const expenses =
                await this.expenseRepository.getAllExpenses(email);

            const total = expenses.reduce(
                (sum, exp) => sum + Number(exp.amount),
                0
            );

            res.render('dashboard', {
                expenses,
                total,
                email:req.email
            });

        } catch (err) {
            res.status(500).send('Something went wrong');
        }
    }

    async addExpense(req, res) {
        try {
            const { name, amount } = req.body;

            if (!name || !amount) {
                return res.send('Please fill all fields');
            }

            const expense = new ExpenseModel(
                name,
                parseFloat(amount),
                req.email
            );

            await this.expenseRepository.addExpense(
                expense
            );

            res.redirect('/');

        } catch (err) {
            res.status(500).send('Something went wrong');
        }
    }

    async deleteexpense(req, res) {
        try {
            const { id } = req.params;

            await this.expenseRepository.deleteExpense(
                id,req.email
            );

            res.redirect('/');

        } catch (err) {
            res.status(500).send('Something went wrong');
        }
    }

    async showUpdatePage(req, res) {
        try {
            const { id } = req.params;

            const expense =
                await this.expenseRepository.getExpenseById(id,req.email);

            if (!expense) {
                return res.send('Expense not found');
            }

            res.render('edit', {
                expense
            });

        } catch (err) {
            res.status(500).send('Something went wrong');
        }
    }

    async updateExp(req, res) {
        try {
            const { id, name, amount } = req.body;

            await this.expenseRepository.updateExpense(
                id,
                {
                    name,
                    amount: parseFloat(amount)
                },
                req.email
            );

            res.redirect('/');

        } catch (err) {
            res.status(500).send('Something went wrong');
        }
    }
}

export default ExpensesController;