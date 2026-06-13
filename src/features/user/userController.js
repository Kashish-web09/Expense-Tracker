import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserModel from "./userModels.js";

import UserRepository from './userRepositary.js';
class UserController {

    constructor() {
        this.userRepository = new UserRepository();
    }

    showRegisterPage(req, res) {
        res.render('register');
    }

    showLoginPage(req, res) {
        res.render('signin');
    }

    async postRegister(req, res) {
        try {

            const { name, email, password } = req.body;

            const existingUser =
                await this.userRepository.findUserByEmail(email);

            if (existingUser) {
                return res.render('register',{
                    error:"User already exists"
                });
            }

            const hashPassword =
                await bcrypt.hash(password, 12);

            const user = new UserModel(
                name,
                email,
                hashPassword
            );

            await this.userRepository.addUser(user);

            return res.redirect('/signin');

        } catch (err) {



            return res.status(500).send(
                "Something went wrong"
            );
        }
    }

    async postLogin(req, res) {

        try {

            const { email, password } = req.body;

            const user =
                await this.userRepository.findUserByEmail(email);

            if (!user) {
                return res.status(404).render('signin')
            }

            const isMatch =
                await bcrypt.compare(
                    password,
                    user.password
                );

            if (!isMatch) {
               return res.render('signin')
            }

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email
                },
                process.env.JWT_SECRETKEY,
                {
                    expiresIn: '2d'
                }
            );

            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                maxAge: 2 * 24 * 60 * 60 * 1000
            });

            return res.redirect('/');

        } catch (err) {


            return res.status(500).json({
                message: "Something went wrong"
            });
        }
    }

    showForgotPass(req, res) {
        res.render('forgot-password');
    }

    async postForgorPassword(req, res) {

        try {

            const {
                email,
                password,
                confirmPass
            } = req.body;

            if (
                !email ||
                !password ||
                !confirmPass
            ) {
                return res.send(
                    "All fields are required"
                );
            }

            if (password !== confirmPass) {
                return res.send(
                    "Passwords do not match"
                );
            }

            const user =
                await this.userRepository.findUserByEmail(email);

            if (!user) {
                return res.send(
                    "User not found"
                );
            }

            const hashPassword =
                await bcrypt.hash(password, 12);

            await this.userRepository.updatePassword(
                email,
                hashPassword
            );

            return res.redirect('/signin');

        } catch (err) {


            return res.status(500).send(
                "Something went wrong"
            );
        }
    }

    logout(req, res) {

        res.clearCookie('token');

        return res.redirect('/signin');
    }

    async apiLogin(req, res) {

        try {

            const { email, password } = req.body;

            const user =
                await this.userRepository.findUserByEmail(email);

            if (!user) {
                return res.status(400).json({
                    message: "Invalid credentials"
                });
            }

            const isMatch =
                await bcrypt.compare(
                    password,
                    user.password
                );

            if (!isMatch) {
                return res.status(400).json({
                    message: "Invalid credentials"
                });
            }

            const token = jwt.sign(
                {
                    id: user._id,
                    email: user.email
                },
                process.env.JWT_SECRETKEY,
                {
                    expiresIn: "2d"
                }
            );

            return res.json({
                token
            });

        } catch (err) {


            return res.status(500).json({
                message: "Something went wrong"
            });
        }
    }
}

export default UserController;