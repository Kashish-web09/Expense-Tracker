class UserModel {
    constructor(name, email, password, type) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.creatAt=new Date();
    }
}

export default UserModel;