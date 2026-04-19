import fs from 'fs';
import path from 'path';
const filePath=path.join(path.resolve(), 'src' ,'data','expenses.json');

class expenseModels{
    static getData(){
const data=fs.readFileSync(filePath,'utf-8');
return JSON.parse(data);
    }
   static getTotalExpenses(expenses){
    return expenses.reduce((acc, exp) => acc + exp.amount, 0);
}
    static saveData(expenses){
        fs.writeFileSync(filePath,JSON.stringify(expenses,null,2));
    }
}
export default expenseModels;