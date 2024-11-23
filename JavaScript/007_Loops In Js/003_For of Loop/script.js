console.log('Understanding For Of Loop');

for (let a of "Chrome"){
  console.log(a);
}

// NOTES
// Ek to  obj must be iterable (Very Very Important)
// ya fir it must be a string 
//  of loop kya krta h ki ek ek letter print krta h string ka 
//  mostly used in arrays 


for (let x of "Hippopotamus"){
  console.log(x)
}

// using for of loop in arrays
let arr = ["hello", "namaste", "keemcho", "sasriyakal"]
for (a of arr){
  console.log(a)
}