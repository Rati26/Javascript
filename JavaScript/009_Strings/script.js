console.log('Strings in JavaScript');

console.log('Collection of characters are called string in JavaScript.');

let user = 'harry';
console.log(user);

console.log(user.length);
// the number of letters in the name are found by .length

console.log(user[0]);
// the first letter of the name will print

// similarly 
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);


// Template Literals

// Template literals use backtics instead of quotes to deifne a string

// using of backticks in writing string

let boy1 = 'pramod'
let boy2 = 'harry'

let sentence = `boy1 is a friend of boy2`; //using backtic over here

console.log(sentence);

// advantage of using backtic is that you can use both single tick and double tick in your line 

// using $ sign in backtic

let sentence2 = `${boy1} is a friend of ${boy2}`;

console.log(sentence2);

// this will print the values of boy1 and boy2



// string interpolation is insterting a variable in a string using % and {}.


// Escape sequence characters

// agr single quote string ke andar hi single quote string likhna h toh 

let fruit = 'banana\'s';
console.log(fruit);
// using backslash to add a single quote in a single quote 
console.log(fruit.length);
// backslash is not treated as a length therefore there will be only 7 characters in banana's.


// new line characters

let fruits = 'banana\ns';
console.log(fruits);




// other excape characters

// \t is for Tab
// \r is for carriage return



console.log('String properties and methods');

let username = 'harry'
console.log(username.length);
// will print 5

let username2 = 'Rohan\''
console.log(username2.length);
// print 6 Rohan' sigle tick is one character

let newname = 'harry bhai'
// uppercase
console.log(newname.toUpperCase(newname));
// lowercase
console.log(newname.toLowerCase(newname));




//slice method
console.log(newname.slice(2));
// 2 is the index number from which the name is sliced
console.log(newname.slice(2, 4));
// harry ko slice krega index 2 se which is r 
// aur isme 4 will not be included 
// output dega rr
console.log(newname.slice(2, 5));
// harry ko slice krega index 2 se which is r 
// aur isme 4 will be included 
// output dega rry



// replace method
console.log(newname.replace('bhai', 'bhabhi'))
// this will replace bhai to bhabhi

// concat method
// use hota h kuch jodne ke liye 

let you = 'Mohan';
let friend = 'Rati';

console.log(you.concat(" is a friend of ", friend));



// Trim method

let you1 = 'Mohan';
let friend2 = 'Rati';
let friend3 = '          Rohan           ';
console.log(friend3.trim());
console.log(friend3);


// printing only the first index of friend or name 
let name2 = 'Shivani';
console.log(name2[0]);
// this will print only s of shivani
console.log(name2[1]);
console.log(name2[2]);
console.log(name2[3]);
console.log(name2[4]);
console.log(name2[5]);
console.log(name2[6]);


// practice set chapter 4

// question 1
console.log("har\"".length);

// question 2

// question 3
let namex = "HARMAN SINGH";
console.log(namex.toLowerCase(namex));

// question 4
// extract the amount out of the string
// "Please give Rs 1000"

let string = "Please give Rs 1000";
console.log(string.slice(15));


var y = "Hello World";
console.log(y.indexOf("W"));

var y = "Hello World";
console.log(y.indexOf("l"));

