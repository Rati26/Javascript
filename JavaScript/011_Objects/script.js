let person = {
  "name": "John",
  "age" : 30, 
  "city" : "New York"
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.city)

// to access the properties
console.log(person["name"])
console.log(person["age"])

// modifying an element in an object
person.name = "Motilal"

console.log(person.name)
console.log(person)
// deleting an element from an object 
delete person.city
console.log(person)