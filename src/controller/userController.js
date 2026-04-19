import userModels from "../models/userModels.js";
class userController{
    showRegisterPage(req,res){
    res.render('register')
}
showLoginPage(req,res){
res.render('login');
}
postRegister(req,res){

const {name,email,password}=req.body;
if(!name||!email||!password){
    return res.send("All fields are required")
}
const newUser=userModels.addUser(name,email,password);
if(!newUser){
    return res.send('User already exists');
}
res.redirect('/login')
}
postLogin(req,res){
    const {email,password}=req.body;
    if(!email ||!password){
return res.send("All fields are requried")
    }
    const user=userModels.findUserByEmail(email);
    if(!user){
                return res.send("User not found");

    }
    if(user.password!==password){
        return res.render('login',{error:'Invalid password'})
    }
    req.session.email=email;
   return  res.redirect('/')

}
showForgotPass(req,res){
    res.render('forgot-password')
}
postForgorPassword(req,res){
const {email,password,confirmPass}=req.body;
if(!email||!password||!confirmPass){
            return res.send("All fields required");
}
if(password!==confirmPass){
        return res.send('forgot-password',{error:'Invalid password'})

}
const user=userModels.findUserByEmail(email);
if(!user){
    return res.send("User not found")
}
userModels.updatePass(email,password);
res.redirect('/login')
}
logout(req,res){
req.session.destroy((err)=>{
    if(err){
        console.log(err)
    }else{
        res.redirect('/login')
    }
});
res.clearCookie('lastVisit');
}
}
export default userController;