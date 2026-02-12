// for of loop
// for(const variable_name of array/string)
// for (const element of object) {
// object means things on which we have applied loop
// }
// for of loop is applied on array, string 

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
//    console.log(num) 
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

//Maps
// Map objects holds key value pairs and remember the original 
// insertion order of the keys
// any value may be used as either a key or a value
// it does not contain duplicate key

const map = new Map()
map.set('IN', "India")
map.set('USA' , "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const num of map) {
    // console.log(num)
}

// to print in a comined array
for(const [key, value] of map){
    console.log(key, ':-', value)
}

const myObject = {
    'game1': 'NFS',
    'game2': "Soiderman"
}
// object can't be iterate by for-of loop
// for(const [key, value] of myObject){
//     console.log(key, ':-', value)
// }
