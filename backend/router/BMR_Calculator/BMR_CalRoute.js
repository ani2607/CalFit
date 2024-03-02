import { Router } from 'express';
const router = Router();

router.post('/',async(req,res)=>{
    const {BodyWeight,Age,Height,Gender,ActivityFactor} = req.body;

    try {
        let BMR = 0;
        //Calculation of final BMR --> Total clories required for the whole day     (total calories == BMR)
        if(Gender == 'Male'){
            BMR = (10*BodyWeight) + (6.25*Height) - (5*Age) + 5;
            if(ActivityFactor == 'Sedentary'){
                // little to no exercise, desk job
                BMR = BMR*1.2;
            }
            else if(ActivityFactor == 'Light Activity'){
                // exercise 1 to 3 days per week
                BMR = BMR*1.375;
            }
            else if(ActivityFactor == 'Moderate Activity'){
                // exercise 3 to 5 days per week
                BMR = BMR*1.55;
            }
            else if(ActivityFactor == 'Very Active'){
                // exercise 6 to 7 days per week
                BMR = BMR*1.725;
            }
            else{
                // exercise 2x per day
                BMR = BMR*1.9;
            }
        }
        else{
            BMR = (10*BodyWeight) + (6.25*Height) - (5*Age) - 161;
            if(ActivityFactor == 'Sedentary'){
                // little to no exercise, desk job
                BMR = BMR*1.2;
            }
            else if(ActivityFactor == 'Light Activity'){
                // exercise 1 to 3 days per week
                BMR = BMR*1.375;
            }
            else if(ActivityFactor == 'Moderate Activity'){
                // exercise 3 to 5 days per week
                BMR = BMR*1.55;
            }
            else if(ActivityFactor == 'Very Active'){
                // exercise 6 to 7 days per week
                BMR = BMR*1.725;
            }
            else{
                // exercise 2x per day
                BMR = BMR*1.9;
            }
        }
        res.status(200).json({"BMR":BMR});

    } catch (error) {
        // console.log(error);
        return res.send(error.message);
    }
})

export default router ;
