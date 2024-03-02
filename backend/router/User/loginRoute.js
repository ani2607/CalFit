import dotenv from "dotenv";
import { Router } from 'express';
import * as EmailValidator from 'email-validator';
import UserModel from '../../database/models/user.model.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
dotenv.config();

const router = Router();



const secret= process.env.SECRETKEY;


router.get('/',(req,res)=>{
    
    res.send("ok");
})

router.post('/',async(req,res)=>{
    const {email,password} = req.body;

    const emailCheck =  EmailValidator.validate(email);
    if(!emailCheck){
        return res.status(300).json("Please enter correct email");
    }

    try {
        const dbres = await UserModel.findOne({email})
        // console.log(dbres);
        const dbUsername = dbres.username;
        const dbEmail = dbres.email;
        const dbPassword = dbres.password;

        // encryting the password 
        // console.log(password , dbPassword);

        const passwordCheck = await bcrypt.compare(password,dbPassword);
        // console.log(passwordCheck);

        if(passwordCheck){
            // console.log('password matches');
            // assign jwt to the cookies 
             const token = jwt.sign({dbUsername,dbEmail,id:dbres._id},secret)
            //  console.log(token);
            res.status(200).cookie('token', token).json({dbUsername,id:dbres._id});

        }else{
            res.status(400).json({"message" : "Wrong Password"});
            // console.log('Password does not matches');
        }

    } catch (error) {
        // console.log(error);
        return res.send(error.message);
    }
})

export default router ;


