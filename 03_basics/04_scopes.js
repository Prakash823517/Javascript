function one(){
    const username = "hitesh"
    //username will be global variable for two() function so username
    // can be accessed in two() function
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()

}
one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website )
    }
    // console.log(website)
}
// console.log(username)

console.log(addone(5))
function addone(num){
    return num + 1
}


// console.log(addTwo(5))
//it will give error bcz when a function is hold in a variable then it 
// can not be accessed before initialization
const addTwo = function(num){
    return num + 2
}
