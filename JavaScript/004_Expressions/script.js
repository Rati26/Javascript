console.log('Understanding Expressions & Operators');

console.log('Expressions');

console.log('A fragment of code which produces a value is called an Expression');

console.log('Operators');
console.log('Arithmetic Operators');

let a = 16;
let b = 4;

console.log(a + b); // Addition
console.log(a - b); // Subtract
console.log(a / b); // Divide
console.log(a * b); // Multiply
console.log(a ** b); // Exponentiation
console.log(a % b); // Modulus 
console.log(a++); // Incerement Operator
console.log(a--); // Decrement Operator

// Values of a is 16
// ++a phele +1 in 16 aur print karega 17
console.log('++a =', ++a); 

// value of a is 17
// print 17 then add krega +1 
// value of a is 18
console.log('a++ =', a++);

// value of a is 18
// value of a me -1 
// value of a will be 17
// print krega 17
console.log('--a =', --a);

// value of a is 17
// value of a me -1
// print krega 17
// value of a will be 16
console.log('a-- =', a--);

// value of a 16 as it is
console.log('a =', a);

// value of a is 16
// print krega 16 
// value of a will be 15
console.log('a-- =', a--);

// value of a is 15
console.log('a =', a);



console.log('Assignment Operators');

//Equal to operator

let x = 1;
console.log(x); 


// += operator

// value of x is 1
x += 5;
console.log(x); //+=5 will become 1 + 5 = 6


// -= operator

x -= 2;
console.log(x);  //-= will become 6 - 2 = 4

x *= 5;
console.log(x); //*= will become 4 * 5 = 20

x /= 5;
console.log(x); //  /= will become 20 / 5 = 4


x **= 2;
console.log(x); //4 ka square 4 * 4 = 16

x %= 2;
console.log(x); // modulus/remainder of 4 will be 0



// Comparison Operators

// comparison operators are used where we have to compare anything ore when we have to tell whether the statement is true or false.
let comp1 = 7;
let comp2 = 5;
console.log(comp1 == comp2);
console.log(comp1 != comp2);
console.log(comp1 === comp2);
console.log(comp1 !== comp2);

console.log('double equal to and triple equal to with string and a number');

let comp10 = 7;
let comp20 = '5';
console.log(comp10 == comp20);
console.log(comp10 != comp20);
console.log(comp10 === comp20);
console.log(comp10 !== comp20);
console.log(comp10 > comp20);
console.log(comp10 < comp20);
console.log(comp10 <= comp20);
console.log(comp10 >= comp20);

// other operators are 
// greater than or equal to >=
// less than or equal to <=
// greater than >
// less than <

console.log('Ternary Operator');



console.log('Logical Operator');

// && operator
// when both sides are true the only it will print true 
// otherwise anyside if false the result will be false.

let c = 5;
let d = 6;

console.log(c<d && c==5);

// Logical Or operator
// any side of the equation if true then result will be true

console.log(c>d || c==5); // a || b, a is false and b is true , result will be true


//  ! Logical not 

!false
!true


// printing the magnitude of x

let j = -1
console.log(Math.abs(j));

let q = 2.7;
console.log(Math.round(q));

let p = 64;
console.log(Math.cbrt(p));

let r = 16;
console.log(Math.sqrt(r));




