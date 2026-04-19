import expenseModels from '../models/expModels.js';
import userModels from '../models/userModels.js';

class expensesController{


showDashoard(req,res){
    const allExpenses=expenseModels.getData();
    const expenses=allExpenses.filter(exp=>{
        return exp.email===req.session.email
    })
    console.log("Session email:", req.session.email);
console.log("All expenses:", allExpenses);

    const total=expenseModels.getTotalExpenses(expenses);
    res.render('dashboard',{expenses,total})
};
addExpense(req,res){
const {name,amount,email}=req.body;
if(!name||!amount){
    return res.send('Please fill all fields')
};
const expenses=expenseModels.getData();
const newExp={
    id:Date.now(),
    name,
    amount:parseFloat(amount),
    email:req.session.email
}
expenses.push(newExp);
expenseModels.saveData(expenses)
    res.redirect('/');

}
deleteexpense(req,res){

    const id=parseInt(req.params.id);
    let expenses=expenseModels.getData();
expenses=expenses.filter(exp=>exp.id!==id);
expenseModels.saveData(expenses);
res.redirect('/');

}
showUpdatePage(req,res){
const id=parseInt(req.params.id);
const expenses=expenseModels.getData();
const expense=expenses.find(exp=>exp.id===parseInt(id) && exp.email===email);
res.render('edit',{expense})

}
updateExp(req,res){
    const {id,name,amount,email}=req.body;
    let expenses=expenseModels.getData();
    const expense=expenses.find(exp=>exp.id===parseInt(id) && exp.email===email);
    if(expense){
        expense.name=name;
        expense.amount=parseFloat(amount);
    }
    expenseModels.saveData(expenses);
    res.redirect('/')
}

}
export default expensesController;