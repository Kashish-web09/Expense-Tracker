import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import cookieParser from 'cookie-parser';
import swagger from 'swagger-ui-express';

import routes from './features/expenses/expRoutes.js';
import userRoutes from './features/user/userRoutes.js';

import { setLastVisit } from './middleware/islastVisitMiddleware.js';
import jwtAuth from './middleware/jwtAuthMiddleware.js';
import { connectToMongoDB } from './config/mongoDb.js';

import apiDocs from '../swagger.json' with { type: 'json' };
import userApiRoutes from './features/user/apiRoutes.js';

const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(expressLayouts);
app.set('layout', 'layout');

// Swagger
app.use(
    '/api-docs',
    swagger.serve,
    swagger.setup(apiDocs)
);

// Public Routes (Login, Register, etc.)
app.use('/', userRoutes);
app.use('/api',userApiRoutes)
// Protected Routes
app.use(
    '/',
    jwtAuth,
    setLastVisit,
    routes
);

// Start Server
app.listen(9800, async () => {
    try {
        await connectToMongoDB();

        console.log('Server running at http://localhost:9800');
    } catch (err) {
        console.error('MongoDB connection failed:', err);
    }
});