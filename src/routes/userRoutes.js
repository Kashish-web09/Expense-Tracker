import userController from "../controller/userController.js";
import express from 'express';
import { auth } from "../middleware/authMiddleware.js";
const userRoutes=express.Router();
const usersController=new userController()
userRoutes.get('/register',usersController.showRegisterPage);
userRoutes.get('/login',usersController.showLoginPage)
userRoutes.post('/register',usersController.postRegister);
userRoutes.post('/login',usersController.postLogin)
userRoutes.get('/forgot-password',usersController.showForgotPass);
userRoutes.post('/forgot-password',usersController.postForgorPassword);
userRoutes.get('/logout',usersController.logout)
export default userRoutes;