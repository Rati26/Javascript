console.log('Functions in JavaScript');

console.log('Function is a block of code designed to run a particular task');
console.log('Logic ko seperate krne ke liye function use krte h');
console.log('Arrow function ka use zaada hota h industry me');


// // syntax
// function myFunction(){
// return //code to be executed
// }

// function nameofFunction(parameter 1 , parameter 2){
// code to be executed
// }


// calculation of average of two numbers

function myAverageFunction(x , y){
 return Math.round(1 + (x + y) / 2)
}
let a = 1;
let b = 2;
let c = 3;

console.log("One plus average of two numbers is", myAverageFunction(a,b));
console.log("One plus average of two numbers is", myAverageFunction(b,c));
console.log("One plus average of two numbers is", myAverageFunction(c,a));
