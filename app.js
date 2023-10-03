console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// printOdds(10);

// function printOdds(count){
//     for(let i = 1; i <= count; i++){
//         if (i % 2 != 0){
//             console.log(i);
//         }
//     }
// }

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");



// function checkAge(userName, age){
    
//     let aboveSixteen = `Congrats ${userName}, you can drive!`
//     let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    
//     if (age < 16){
//         console.log(belowSixteen);
//     }
//     else {
//         console.log(aboveSixteen);
//     }
// }
// checkAge("John", 18);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// function checkQuadrant(x, y){
//     if ( x > 0 && y > 0){
//         console.log(`${x} and ${y} are in the 1st quadrant.`);
//     }
//     else if (x < 0 && y > 0){
//         console.log(`${x} and ${y} are in the 2nd quadrant.`);
//     }
//     else if (x < 0 && y < 0){
//         console.log(`${x} and ${y} are in the 3rd quadrant.`);
//     }
//     else if (x > 0 && y < 0){
//         console.log(`${x} and ${y} are in the 4th quadrant.`);
//     }
//     else if (x == 0 && y > 0 || y < 0){
//         console.log(`${x} and ${y} are on the X axis.`);
//     }
//     else if (y == 0 && x > 0 || x < 0){
//         console.log(`${x} and ${y} are on the Y axis.`);
//     }
//     else {
//         console.log("x and y are at 0");
//     }
// }
// checkQuadrant(5, -9);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// function typeOfTriangle(a, b, c){
//     if (a + b > c && b + c > a && c + a > b ){
//         if (a == b && b == c && c == a){
//             console.log("Triangle type: Equilateral")
//         }
//         else if (a == b || b == c || c == a){
//             console.log("Triangle type: Isosceles")
//         }
//         else if (a != b && b != c && c != a ){
//             console.log("Triangle type: Scalene")
//         }
//     }
//     else {
//         console.log("Invalid Triangle")
//     }
// }
// typeOfTriangle(3, 3, 4);

// Exercise 5 Bonus
console.log("EXERCISE 5:\n==========\n");

function phoneDataUsage(planLimit, day, usage){
    const averageDailyUsage = usage / day;

  
  const remainingDays = 30 - day;

  
  const maxDailyUsageToStayWithinPlan = (planLimit - usage) / remainingDays;

  let feedback = "";
  if (averageDailyUsage > maxDailyUsageToStayWithinPlan) {
    feedback = "You are EXCEEDING your average daily use";
  } else if (averageDailyUsage < maxDailyUsageToStayWithinPlan) {
    feedback = "You can afford to use more data";
  } else {
    feedback = "You are right on track with your average daily use";
  }


  const excessUsage = (averageDailyUsage - maxDailyUsageToStayWithinPlan) * remainingDays;

  const message = `${day} days used, ${remainingDays} days remaining
Average daily use: ${averageDailyUsage.toFixed(3)} GB/day
${feedback} (${maxDailyUsageToStayWithinPlan.toFixed(2)} GB/day),
continuing this high usage, you'll exceed your data plan by
${excessUsage.toFixed(1)} GB.
To stay below your data plan, use no more than ${maxDailyUsageToStayWithinPlan.toFixed(2)} GB/day.`;

  
  console.log(message);


}

phoneDataUsage(56, 13, 10)