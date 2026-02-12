const myObject = {
    js: 'javascript',
    cpp : 'c++',
    rb: "ruby",
    swift: "swift by apple"
}
// for object iteration for-in loop is used

for (const key in myObject) {
    // console.log(key)
    // console.log(myObject[key])
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const num in programming) {
    //it will prints the key of array
    // console.log(num) 

    console.log(programming[num])
}

const map = new Map()
map.set('IN', "India")
map.set('USA' , "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// map is not iteratable with for-in loop
// for (const key in map) {
//     console.log(key)
// }

