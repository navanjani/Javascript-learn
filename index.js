
if (process.argv.length !== 7) {
    console.log(`
      
      Please provide 5 arguments for
      
      weight (kg), 
      height (m), 
      age, 
      do you exercise daily (yes or no)
      and your gender (m or f)
      
      Example:
  
      $ node index.js 69 1.60 30 yes f
    `);
  
    process.exit();
  }
  
const weightInKg = parseInt(process.argv[2]);
const heightInM = parseFloat(process.argv[3]);
const age = parseInt(process.argv[4]);
const dailyExercise = process.argv[5]; 
const gender = process.argv[6] ;

if (isNaN(weightInKg) || isNaN(heightInM) || isNaN(age)) {
    console.log(` Please make sure weight , height and age are numbers. 
    `);
    process.exit();
}

if (age < 20 ) {
    console.log(
        `This BMI calculator is designed for people older than 20`
    );
    process.exit();
}

if (weightInKg < 30 || weightInKg > 300 ){
    console.log(` Please enter a weight in kgs ,in between 30kg  to 300kg
    `);
    process.exit();
}
if (dailyExercise !== "yes" && dailyExercise !== "no"){
    console.log(`Please fiilin the field 'do you exercise daily' with yes or no`);
    process.exit();
}

//BMI = weight (kg) / (height (m) x height (m))

const BMI = weightInKg / (heightInM * heightInM);

// Ideal weight = 22.5 *height(m) * height(m)

const idealWeight = 22.5 * heightInM * heightInM;

// BMR = 10 x weight (kg) + 6.25 x height (cm) - 5 x age
// Daily calorie usage = BMR * 1.4
// with workouts daly calorie usage = BMR * 1.6

let BMR ;
if ( gender === "m") {
    BMR = (10 * weightInKg) + (6.25 * (heightInM *100) - (5 * age)) + 50 ;
}else {
    BMR = ((10 * weightInKg) + (6.25 * (heightInM *100) - (5 * age)) + 50 ) - 150
};


const dailyCalorieUsage = dailyExercise === "yes" ? BMR * 1.6 : BMR * 1.4 ;


// weight to lose to reach idealweight = weight (kg) - ideal weight (kg)
// time (weeks) it will take to reach your ideal weight =amount of weight to lose / 0.5
// calories consume while dieting = your daily usage - 500

const weightToloseKg = weightInKg - idealWeight;

const timeToReachIdealWeight = Math.abs(weightToloseKg / 0.5);

let dailyCalorieConsumption ;

if (weightToloseKg < 0 ){
   dailyCalorieConsumption =  dailyCalorieUsage + 500;
}else{
    dailyCalorieConsumption = dailyCalorieUsage - 500;
}


console.log(`
********************
    BMI CALCULATOR
********************
    
height : ${heightInM}
weight : ${weightInKg}
age : ${age}
do you exercise daily ? ${dailyExercise}
gender : ${gender}


********************
   FACING THE FACTS
********************

Your BMI is ${Math.round(BMI)}

A BMI under 18.5 is considered underweight

A BMI above 25 is considered overweight

Your ideal weight is ${Math.round(idealWeight)} kg
With your lifestyle you burn ${Math.round(dailyCalorieUsage)} a day



********************
    DIET PLAN
********************

If you want to reach your idael weight of ${Math.round(idealWeight)} kg :

Eat ${Math.round(dailyCalorieConsumption)} calories a day  
for ${Math.round (timeToReachIdealWeight)} weeks


`   );
