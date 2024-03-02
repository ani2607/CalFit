import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config();
const secret= process.env.SECRETKEY;



 function isAuth(req,res,next){

    const {token} = req.cookies;
    if(token == null || token == ''){
        return res.status(401).json({"message" : "Not a authorized user"});
    }   
    try {
        
        const result =  jwt.verify(token,secret);
        // console.log(result.dbEmail);
        // console.log(result.dbUsername);
    } catch (error) {
        console.log(error);
        res.status(401).json({"message" : "Unauthorized user"});
    }
    next();
    // console.log(token);

}

export default  isAuth;
