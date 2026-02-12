// immediately invoked function expression
// it executes immediately and does not pollute by global variable

// function chai(){
//     console.log(`DB Connected`)
// }
// chai()

// syntax of iife
//()()

(function chai(){
    console.log(`DB Connected`)
}) ();
 // we need semi-colon(;) to end a iife function

 ((name) => {
    console.log(`DB connected Two ${name}`)
 })('hitesh')