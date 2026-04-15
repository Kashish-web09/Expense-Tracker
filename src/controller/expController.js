import expenseModels from '../models/expModels.js';

class expensesController{


showDashoard(req,res){
    const expenses=expenseModels.getData();
    const total=expenseModels.getTotalExpenses(expenses);
    res.render('dashboard',{expenses,total})
};
addExpense(req,res){
const {name,amount}=req.body;
if(!name||!amount){
    return res.send('Please fill all fields')
};
const expenses=expenseModels.getData();
const newExp={
    id:Date.now(),
    name,
    amount:parseFloat(amount),
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
const expense=expenses.find(exp=>exp.id===parseInt(id));
res.render('edit',{expense})

}
updateExp(req,res){
    const {id,name,amount}=req.body;
    let expenses=expenseModels.getData();
    const expense=expenses.find(exp=>exp.id===parseInt(id));
    if(expense){
        expense.name=name;
        expense.amount=parseFloat(amount);
    }
    expenseModels.saveData(expenses);
    res.redirect('/')
}

}
export default expensesController;