const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);


//BMI = weight (kg) / (height (m) x height (m))

const BMI = weightInKg / (heightInM * heightInM);

// Ideal weight = 22.5 *height(m) * height(m)

const idealWeight = 22.5 * heightInM * heightInM;

// BMR = 10 x weight (kg) + 6.25 x height (cm) - 5 x age
// Daily calorie usage BMR * 1.4

const BMR = (10 * weightInKg) + (6.25 * (heightInM *100) - (5 * age));

const dailyCalorieUsage = BMR * 1.4;

// weight to lose to reach idealweight = weight (kg) - ideal weight (kg)
// time (weeks) it will take to reach your ideal weight =amount of weight to lose / 0.5
// calories consume while dieting = your daily usage - 500

const weightTolose = weightInKg - idealWeight;

const timeToReachIdealWeight = weightTolose / 0.5;

const dailyCalorieConsumption = dailyCalorieUsage - 500;



console.log(`
********************
    BMI CALCULATOR
********************
    
height : ${heightInM}
weight : ${weightInKg}


********************
   FACING THE FACTS
********************

Your BMI is ${Math.round(BMI)}

A BMI under 18.5 is considered underweight

A BMI above 25 is considered overweight

Your idaeal weight is ${Math.round(idealWeight)} kg
With a normal lifestyle you burn ${Math.round(dailyCalorieUsage)}


********************
    DIET PLAN
********************

If you want to reach your idael weight of ${Math.round(idealWeight)} kg :

Eat ${Math.round(dailyCalorieConsumption)} calories a day  
for ${Math.round(timeToReachIdealWeight)} weeks
`   );
