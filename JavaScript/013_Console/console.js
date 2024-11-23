console.log(console) //making an object 

console.error("This is an Error") //will highlight this as an error in the console as red 

console.warn("This is a Warning") //will highlight this as an error in the console as yellow

console.assert(5>50) //assertion failed 
console.assert(50>5) //no error
// what is happening here is assert me jo bhi false hoga vo hightlight ho jayega aur agr true hogi toh normally run krega koi error show nhi krega

console.clear() //will clear the console 

obj ={
  "Name" : "Rahul",
  "Class" : "6th",
  "Marks" : 40,
  "Grade" : "A",

}
console.table(obj);

console.info("Hey this is an important information") //this will just get filtered in the info part in the console and does nothing else.

// time and time end 
// this tells the time taken by something in completion of that task 
console.time("a")
for(let i =0;i<100;i++){
  console.log(i)
}
console.timeEnd("a")


