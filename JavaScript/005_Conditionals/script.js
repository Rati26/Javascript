console.log('Understanding Conditionals : If else Statements');

console.log('Understanding Prompt');

// let age = prompt("Hey! what's your age?");
// // prompt by default are strings
// // to change the prompt to a number do this 
// age = Number.parseInt(a); 

// if (age>0){
//   alert('This is a valid age.');
// }
//   else{
//     alert('This is not a valid age.')
//   };
// console.log(typeof a);

console.log('There are three types of If else Statements');

console.log('If Statement');
// if the condition is true then the code will run otherwise the code will not run


console.log('If else Statement');
//If the condition is true then the code will run as it is otherwise it will jump off to the else statement


console.log('If Else If else statement');

let x = 18;

if(x<=0){
  console.log('This is an invalid age');
}
else if(x>0 && x<18){
  console.log('You can not drive');
}

else{
  console.log('You can drive');
}

// Ternary operator
console.log("You can", x>=18? "drive" : "Not Drive");

//  js will check the condition x>=18 
// if true it will condition show drive
// it not true it will show condition not drive


