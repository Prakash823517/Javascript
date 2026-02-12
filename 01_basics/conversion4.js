let score = "33abc"
//let score = "33"
//let score = null
//let score = undefined
//let score = true
//let score = "Hitesh"

console.log(typeof score);
console.log(typeof(score))

//for conversion write Number in first letter capital
let valueInNumber = Number(score) // it will not give error in conversion of alphabet into number
console.log(typeof valueInNumber)
console.log(valueInNumber) // it will give outcome NaN (not a number)


//conversion into number
//"33" -> 33
//null -> 0
//"33abc" -> NaN
//true -> 1; false -> 0


let isLoggedIn = 1 
//let isLoggedIn = "Hitesh"
//let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
//1 => true; 0=> false
//"" => false
//"hitesh"(any value inside"") => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)