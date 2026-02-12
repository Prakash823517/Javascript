// ...  spread or rest operator
// spread operator packs the all value and return in a bundle 
// multiple value can be passed
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400))

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200, 300, 400, 2000))

//passing object in function
const user = {
    username: "hitesh",
    // prices: 199,
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 800, 500, 1000]))
