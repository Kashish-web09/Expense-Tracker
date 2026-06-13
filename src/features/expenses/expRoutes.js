import express from 'express';
import ExpensesController from './expController.js';
import jwtAuth from '../../middleware/jwtAuthMiddleware.js';
const routes = express.Router();

const expController = new ExpensesController();

routes.get(
    '/',
    jwtAuth,
    expController.showDashoard.bind(expController)
);

routes.post(
    '/add',
    jwtAuth,
    expController.addExpense.bind(expController)
);

routes.get(
    '/delete/:id',
    jwtAuth,
    expController.deleteexpense.bind(expController)
);

routes.get(
    '/edit/:id',
    jwtAuth,
    expController.showUpdatePage.bind(expController)
);

routes.post(
    '/update',
    jwtAuth,
    expController.updateExp.bind(expController)
);

export default routes;