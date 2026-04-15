import userController from "../controller/userController.js";
import express from 'express';
const userRoutes=express.Router();
const usersController=new userController()
userRoutes.get('/register',usersController.showRegisterPage);
userRoutes.get('/login',usersController.showLoginPage)
userRoutes.post('/register',usersController.postRegister);
userRoutes.post('/login',usersController.postLogin)
userRoutes.get('/forgot-password',usersController.showForgotPass);
userRoutes.post('/forgot-password',usersController.postForgorPassword)
export default userRoutes;