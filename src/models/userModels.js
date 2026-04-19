import path from 'path';
import fs from 'fs';

const filePath = path.join(path.resolve(), 'src', 'data', 'userData.json');


class userModels{
        constructor(id,name,email,password) {
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }

    static getuser(){
       try{
        const user=fs.readFileSync(filePath,'utf-8');
        return JSON.parse(user)
    }catch(err){
        return [];
    }
    }
    static saveUser(users){
fs.writeFileSync(filePath,JSON.stringify(users,null,2))        
    }
    static findUserByEmail(email){
        const users=this.getuser();
        return users.find(user=>user.email===email);
    }
    static addUser(name,email,password){
        const users=this.getuser();
        const existUser=users.find(user=>user.email===email);
        if(existUser){
            return null;
        }
        const newUser=new userModels(
            Date.now().toString(),
            name,
            email,
            password,
            email
        );
        users.push(newUser);
        this.saveUser(users);
    return newUser;
    }
static updatePass(email,newPassword){
let user=this.getuser();
const userIndex=user.findIndex(user=>user.email===email);
if(userIndex===-1){
    return false;
}
user[userIndex].password=newPassword;
this.saveUser(user);
return true;
}
    
}

export default userModels;