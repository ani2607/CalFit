import { Router } from 'express';
const router = Router();

router.post('/',async(req,res)=>{
    const {BodyWeight,Age,Height,Gender,ActivityFactor,TypeOfDiet} = req.body;
    const MorningMeal = req.body.MorningMeal;
    const AfterNoonMeal = req.body.AfterNoonMeal;
    const EveningMeal = req.body.EveningMeal;
    const NightMeal = req.body.NightMeal;

    try {

        //Calculation of final BMR --> Total clories required for the whole day     (total calories == BMR)
        if(Gender == 'Male'){
            let BMR = (10*BodyWeight) + (6.25*Height) - (5*Age) + 5;
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
            let BMR = (10*BodyWeight) + (6.25*Height) - (5*Age) - 161;
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
  
        let CaloriesIntake = 0;
        if(TypeOfDiet == 'Veg'){
            //Total calories intake in the morning
            MorningMeal.forEach(meal => {
                meal[0].toLowerCase();
                if(meal[0] == 'oats'){
                    CaloriesIntake += (150*meal[1]);
                }
                else if(meal[0] == 'yogurt'){
                    CaloriesIntake += (120*meal[1]);
                }
                else if(meal[0] == 'mixed berries'){
                    CaloriesIntake += (40*meal[1]);
                }
                else if(meal[0] == 'avacado'){
                    CaloriesIntake += (120*meal[1]);
                }
                else if(meal[0] == 'egg'){
                    CaloriesIntake += (70*meal[1]);
                }
                else if(meal[0] == 'granola'){
                    CaloriesIntake += (200*meal[1]);
                }
                else if(meal[0] == 'chpped vegetables'){
                    CaloriesIntake += (50*meal[1]);
                }
                else if(meal[0] == 'almond milk'){
                    CaloriesIntake += (15*meal[1]);
                }
                else if(meal[0] == 'wheat toast'){
                    CaloriesIntake += (160*meal[1]);
                }
                else if(meal[0] == 'peanut butter'){
                    CaloriesIntake += (190*meal[1]);
                }
                else if(meal[0] == 'cheese'){
                    CaloriesIntake += (80*meal[1]);
                }
                else if(meal[0] == 'almonds'){
                    CaloriesIntake += (206*meal[1]);
                }
                else if(meal[0] == 'honey'){
                    CaloriesIntake += (64*meal[1]);
                }
                else if(meal[0] == 'upma'){
                    CaloriesIntake += (275*meal[1]);
                }
                else if(meal[0] == 'uttapam'){
                    CaloriesIntake += (225*meal[1]);
                }
                else if(meal[0] == 'idli Sambar'){
                    CaloriesIntake += (275*meal[1]);
                }
                else if(meal[0] == 'dosa with coconut chutney'){
                    CaloriesIntake += (325*meal[1]);
                }
                else if(meal[0] == 'poha'){
                    CaloriesIntake += (225*meal[1]);
                }
                else if(meal[0] == 'plain paratha'){
                    CaloriesIntake += (175*meal[1]);
                }
                else if(meal[0] == 'aloo paratha'){
                    CaloriesIntake += (275*meal[1]);
                }
                else if(meal[0] == 'sugar'){
                    CaloriesIntake += (48*meal[1]);
                }
                else{
                    CaloriesIntake += (meal[1]);
                }
                
            });
            
            //Total calories Intake in the AfterNoon
            AfterNoonMeal.forEach((meal)=>{
                meal.toLowerCase();
                if(meal[0] == 'roti sabzi'){

                    
                }
            })
            // And so on

            //Total calories Intake in the Evening

        }
        else{

        }

    } catch (error) {
        // console.log(error);
        return res.send(error.message);
    }
})

export default router ;
