import {getDB} from '../../config/mongoDb.js'
import { ApplicationError } from '../../errrorHandler/ApplicationError.js';
class ExpenseRepository {

    async getAllExpenses(email) {
        try {
            const db = getDB();

            return await db
                .collection('expenses')
                .find({userEmail :email})
                .toArray();

        } catch (err) {

            throw new ApplicationError(
                'Database Error',
                500
            );
        }
    }

    async addExpense(expense) {
        try {
            const db = getDB();

            return await db
                .collection('expenses')
                .insertOne(expense);

        } catch (err) {
            throw new ApplicationError(
                'Database Error',
                500
            );
        }
    }

    async deleteExpense(id,email) {
        try {
            const db = getDB();

            const { ObjectId } = await import('mongodb');

            return await db
                .collection('expenses')
                .deleteOne({
                    _id: new ObjectId(id),
                    userEmail:email
                });

        } catch (err) {
            throw new ApplicationError(
                'Database Error',
                500
            );
        }
    }

    async updateExpense(id, updatedExpense,email) {
        try {
            const db = getDB();

            const { ObjectId } = await import('mongodb');

            return await db
                .collection('expenses')
                .updateOne(
                    { _id: new ObjectId(id) ,
                        userEmail:email
                    },
                    { $set: updatedExpense }
                );

        } catch (err) {

            throw new ApplicationError(
                'Database Error',
                500
            );
        }
    }

    async getTotalExpenses() {
        try {
            const db = getDB();

            const expenses = await db
                .collection('expenses')
                .find()
                .toArray();

            return expenses.reduce(
                (acc, exp) => acc + Number(exp.amount),
                0
            );

        } catch (err) {
            throw new ApplicationError(
                'Database Error',
                500
            );
        }
    }
    async getExpenseById(id,email){
        const db=getDB();
        const {ObjectId}=await import('mongodb');
        return await db.collection('expenses').findOne({_id:new ObjectId(id),userEmail:email});
    }
}

export default ExpenseRepository;