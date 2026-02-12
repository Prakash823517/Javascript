
function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}
// when a function is calling then it will start executing
// sayMyName()
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)

// }
// addTwoNumbers()
// addTwoNumbers(3, 4)
// const result = addTwoNumbers(3, 5)
// above function is not returning any value so result will be undefined
// console.log("result: ", result) 

// give wrong output 
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

function addTwoNumbers(number1, number2){
    // let result  = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log("result: ", result)

// function loginUserMessage(username){
//     return `${username} just logged in` 
// }
// console.log(loginUserMessage("hitesh"))
// if we don't pass any value then it will give undefined
// console.log(loginUserMessage())


// function loginUserMessage(username){
    
//     // if(username === undefined){
//     //     console.log("Please enter a username")
//     //     return
//     // }

//     //equivalent of above code
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())


// default value "Sam"
function loginUserMessage(username = "Sam"){
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))
// if we don't pass any value then default value will be print
console.log(loginUserMessage())





