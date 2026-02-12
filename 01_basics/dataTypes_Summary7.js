//it is a dynamically typed language
const score = 100
const scoreValue = 100.3
const isLoggedIn = false

// null means empty, not zero 
const outsideTemp = null
let userEmail;

// symbol always return a unique value
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// for bigInt use n at the end of the number 
const bigNumber = 34162498756945673575n

//array
const heros = ["shaktiman", "naagraj", "doga"]

// object will be inside curly braces in key:value pairs 
//object
let myObj = {
    name: "Hitesh",
    age: 22
}

//function
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof outsideTemp);
console.log(typeof bigNumber)
console.log(typeof myFunction)
