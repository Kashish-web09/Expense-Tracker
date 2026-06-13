class ExpenseModel {
    constructor(name,amount,userEmail) {
        this.name=name
        this.amount = amount;
this.userEmail=userEmail;
this.createAt=new Date();
    }
}

export default ExpenseModel;