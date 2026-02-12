const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        // this keyword is used for current context
        // this is used to access variable or property of object in current scope
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

// in node environment golobally there is not context
// so this will print {} ampty object
// when we will run this code into console it will give window
// because inside browser global object is window
// console.log(this)

// function chai(){
//     console.log(this)
// }
// chai()

//  function chai(){
//     let username = "hitesh"
//     console.log(this.username) // it will not work in function 
// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()


// arrow function
const chai = () => {
    let username = "hitesh"
    // console.log(this.username)
    console.log(this)
}
chai()

// synatx of arrow funtion
// ()  => {}  

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 5))

//implict return arrow function
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)

// console.log(addTwo(3, 4))

// to return an object 
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 5))
