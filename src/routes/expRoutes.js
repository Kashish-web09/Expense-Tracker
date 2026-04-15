import express from 'express';
import expensesController from '../controller/expController.js';
const routes=express.Router();
const ExpController=new expensesController;
routes.get('/',ExpController.showDashoard);
routes.post('/add',ExpController.addExpense);
routes.get('/delete/:id',ExpController.deleteexpense)
routes.get('/edit/:id',ExpController.showUpdatePage);
routes.post('/update',ExpController.updateExp)
export default routes;

