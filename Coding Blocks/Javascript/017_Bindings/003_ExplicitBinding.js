// // Call
// function printDetails (city, Country){
//   console.log("name",this.name)
//   console.log("age",this.age)
//   console.log("college",this.college)
//   console.log("city",city)
//   console.log("Country",Country)
// }

// // printDetails();

// let p1 = {
//   "name" : "John",
//   "age" : 25,
//   "college" : "DTU",
// }

// let p2 = {
//   "name" : "Jack",
//   "age" : 20,
//   "college" : "NSUT",
// }
// let p3 = {
//   "name" : "Jerry",
//   "age" : 29,
//   "college" : "MAIT",
// }

// printDetails.call(p3 ,"Delhi");

// Apply

// printDetails.apply(p3, ["Delhi", "India"])


// // Bind
// let fun = printDetails.bind(p1,"Delhi","India") //binding me voh fix kro jo chayea baaki argument me pass krdo jo change krna h fun("India")
// fun();