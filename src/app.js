import express from 'express';
import routes from './routes/expRoutes.js';
import expressLayouts from 'express-ejs-layouts';
import userRoutes from './routes/userRoutes.js';
const app=express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}))
app.use(expressLayouts);
app.set('layout','layout');
app.use('/',routes)
app.use('/',userRoutes);


app.listen(9800,()=>{
    console.log("Server is running at http://localhost:9800")
})