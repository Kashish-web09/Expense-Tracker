import express from 'express';
import routes from './routes/expRoutes.js';
import expressLayouts from 'express-ejs-layouts';
import userRoutes from './routes/userRoutes.js';
import session from 'express-session';
import path from 'path';
import cookieParser from 'cookie-parser';
import { setLastVisit } from './middleware/islastVisitMiddleware.js';
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(path.resolve(),'src','views'));
app.use(express.urlencoded({extended:true}))

app.use(expressLayouts);
app.set('layout','layout');
app.use(cookieParser());
app.use(session({
    secret:'a8f9#K2l!xP0qZ@91LmN$',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
})
);
app.use((req, res, next) => {
    res.locals.email = req.session.email;
    next();
});
app.use('/',setLastVisit,routes)
app.use('/',userRoutes);


app.listen(9800,()=>{
    console.log("Server is running at http://localhost:9800")
})