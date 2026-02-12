const userEmail = "h@hitesh.ai"
// const userEmail = " "
// const userEmail = []
// if we provide a non empty string then userEmail assumes true value

if(userEmail){
    console.log("got user email")
}
else{
    console.log("do not have user email")
}


// falsy values

// false, 0 , -0 , 0n in BigInt, "" , null, undefined, NaN

// truthy values
// except from falsy values
//"0" (zero inside string), 'false' (false in string), " " (space inside string), 
// [], {}, function(){} (empty function)

const arr = []
if(arr.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys (emptyObj).length === 0){
    console.log("Object is empty");
}

// nullish coalescing Operator (??): null, undefined 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10  // if value is present then assign that value otherwise assign null
// val1 = undefined ?? 15 // if value is present then assign that value otherwise undefined
val1 = null ?? 10 ?? 15 // first number will be assign
console.log(val1);

// terniary operator
//condition ? true statement : false statement

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")