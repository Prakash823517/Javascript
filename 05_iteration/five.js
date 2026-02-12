const coding = ["js","ruby", "java", "python", "cpp"]

// call back function does not has  function name
// coding.forEach( function (val){
//     console.log(val);
// })

//using arrow function
// coding.forEach( (item) => {
//     console.log(item)
// } )

// passing function in forEach loop

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// it always can get 3 parameter access 
coding.forEach((item, index, arr) => {
    // console.log(item , index, arr)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})