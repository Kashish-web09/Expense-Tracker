import express from 'express';
import expensesController from '../controller/expController.js';
import { auth } from '../middleware/authMiddleware.js';
const routes=express.Router();
const ExpController=new expensesController;
routes.get('/',auth,ExpController.showDashoard);
routes.post('/add',auth,ExpController.addExpense);
routes.get('/delete/:id',ExpController.deleteexpense)
routes.get('/edit/:id',ExpController.showUpdatePage);
routes.post('/update',ExpController.updateExp)
export default routes;

