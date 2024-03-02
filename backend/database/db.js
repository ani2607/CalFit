
import mongoose from 'mongoose';


const dbConnection = async()=>{
    try {
        const res = await mongoose.connect(process.env.MONGODB_URL);
        
        if(res){
            console.log('database connected');
        }
        
    } catch (error) {
        console.log(error.message);   
    }
}

export default dbConnection;