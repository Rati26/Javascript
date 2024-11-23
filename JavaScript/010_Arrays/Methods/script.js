console.log('Understanding Array Methods in JavaScript');

let num = [1490, 250, 300, 44, 50]
console.log(num);

// tostring method
// converting a array into a string
// let a = num.toString() // a is now a string
// console.log(a, typeof a);

// join method
// joining the elements of array with and, _ or anything.
// let b = num.join(" and ")
// console.log(b, typeof b);

// pop method
// this will pop out the last element from the array
// num.pop()
// console.log(num);

// on let x the pop element will be returned 
// pop returns the pop element
// let x = num.pop()
// console.log(x);

// push method
// push returns the pushed element with length 
// let d = num.push(50)
// console.log(num, d);

// adding a new value to the array and it also increases the length

// shift method
// let r = num.shift()
// console.log(num, r)
// removes the first element and returns it 

// unshift method
// adds another element in the beginning of the array

// let r = num.unshift(15)
// console.log(num, r);

// delete operator method
// delete is a operator not a method

// delete num[0]
// console.log(num);
// console.log(num.length);
// the length is not affected 

// concat method
// adding 2 or more arrays together

// let num1 = [15, 16, 17, 18, 19, 20]

// let newArray = num.concat(num1);
// console.log(newArray);

// sort method
// num.sort()
// console.log(num);
// alphabetically sort krta h 
// 1 se start hone wale sare fir 2 se fir 3 se and so on 

// how to sort in ascending order
// let compare = (a, b)=>{
//   return a - b
// }
// num.sort(compare)
// console.log(num);

// how to sort in descending order
// let compare = (a, b)=>{
//   return b - a
// }
// num.sort(compare)
// console.log(num);


// reverse method
// reverses the array elements 
// num.reverse()
// console.log(num);


// splice and slice methods
// splice method

// num.splice(start,delete, addthis, addthis...)

// num.splice(2, 1, 1020, 1050, 2001)
// console.log(num);

// slice method

// let newNum = num.slice(2)
// console.log(newNum);
// will print from 2 and go till the end


// let newNum = num.slice(3, 5)
// console.log(newNum);
// will start from 3 and go till 5 
//  5 not included 


