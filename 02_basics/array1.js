const myArr = [0 , 1, 2, 3, 4, 5 , true , "hitesh"]
const myHeros = ["shaktiman", "Iron man", "Super Man"]

console.log(myHeros[0])
console.log(typeof (myHeros))
// another way of declaring array
const myArray2 = new Array(1, 2, 3, 4, 5)
console.log(typeof (myArray2))

// array methods
// to add a value at the end of the array 
// myArr.push(6)
// myArr.push(8)
// to remove a value from the end 
// myArr.pop()
// to add a value in the begining of an array 
// myArr.unshift(9)//it is not optimised bcz it shifts all the value of the arrya
// to remove first element from the array 
// myArr.shift()
// checks that element exist or not
console.log(myArr.includes(9))
console.log(myArr.indexOf(10))
console.log(myArr.indexOf("hitesh"))

//join converts all the array into string
const newArr = myArr.join()

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice, splice
console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C ", myArr)