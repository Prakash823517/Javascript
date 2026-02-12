const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// push adds elements in existing array but concat returns a new array 
// concat does not change the existing array
// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [true, 9, "hit"]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)
console.log(another_array.flat(Infinity))

// it will chaeck that inside paranthesis is a array or not 
console.log(Array.isArray("Hitesh"))
// it will convert inside paranthesis data into array 
console.log(Array.from("hitesh"))
// if it is not able to convert into array then it will provide an empty array 
// it is not clear which I have to convert key or value into array so it
// will not convert anyone
console.log(Array.from({name: "hitesh"}))

// it will return a new array from set of elements 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))