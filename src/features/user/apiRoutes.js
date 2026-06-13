import express from 'express';
import UserController from './userController.js';

const userApiRoutes = express.Router();
const controller = new UserController();

userApiRoutes.post('/users/signin', controller.apiLogin.bind(controller));

export default userApiRoutes;