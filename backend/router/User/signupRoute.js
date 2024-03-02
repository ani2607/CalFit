import { Router } from 'express'
import bcrypt from 'bcrypt'
import UserModel from '../../database/models/user.model.js';
import * as EmailValidator from 'email-validator';



const router = Router();
const saltRounds = Number(process.env.SALT)

router.get('/',(req,res)=>{
    res.send("signup page");
})

router.post('/',async(req,res)=>{
    
    const {username,email, password} = req.body;
    const emailChecker = EmailValidator.validate(email);
    if(!emailChecker){
        return res.status(300).json({"message" : "Please enter correct email"})
        
    }
    try {
        const enPassword = await bcrypt.hash(password,saltRounds);
        const respond  = await UserModel.create({
            username,
            email,
            password : enPassword
        })
        // console.log(respond);

        res.status(200).json({"message" : "user added successfully"});
    } catch (error) {
        console.log(error.message);
    }
    
})

export default router;