import express from 'express';
import UserController from './userController.js';

const userRoutes = express.Router();

const userController = new UserController();

userRoutes.get(
    '/register',
    userController.showRegisterPage.bind(userController)
);

userRoutes.post(
    '/register',
    userController.postRegister.bind(userController)
);

userRoutes.get(
    '/signin',
    userController.showLoginPage.bind(userController)
);

userRoutes.post(
    '/signin',
    userController.postLogin.bind(userController)
);

userRoutes.get(
    '/forgot-password',
    userController.showForgotPass.bind(userController)
);

userRoutes.post(
    '/forgot-password',
    userController.postForgorPassword.bind(userController)
);

userRoutes.get(
    '/logout',
    userController.logout.bind(userController)
);

export default userRoutes;