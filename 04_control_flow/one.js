// if(condition){

// }

// < , > , >= , <= , == , != , === , !==

// if(2 === "2"){
//     console.log("executed");
// }

const temperature = 50
if(temperature === 41){
    console.log("temperature is 41")
}
else{
    console.log("temperature is not 41")
}
console.log("executed")

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`);

const balance = 1000
// if(balance > 500) console.log("test");

// do not write code like this
// if(balance > 500) console.log("test"), console.log("test2");

if(balance < 500){
    console.log("less than 500")
}
else if(balance < 750){
    console.log("less than 750")
}
else{
    console.log(" greater than 750")
}

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

const loggedINFromGoogle = false
const loggedInFromEmail = true
if(loggedINFromGoogle || loggedInFromEmail){
    console.log("User Logged in")
}