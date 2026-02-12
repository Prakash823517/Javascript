// for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element)
// }

// for(let i = 0; i <= 10; i++){
//     // console.log(`Outer loop value: ${i}`)
//     for(let j = 0; j <= 10; j++){
//         // console.log(`Inner loop value: ${j} and outer loop ${i}`)
//         console.log(i + '*' + j + '=' + i*j )
//     }
// }

let myArray = ["flash", "Batman", "superman"]
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

// break and continue
for( let i = 0; i < 10; i++){
    if(i == 5){
        console.log("detected 5")
        break
    }
    console.log(`Value of i is ${i}`)
}

for( let i = 0; i < 10; i++){
    if(i == 5){
        console.log("detected 5")
        continue
    }
    console.log(`Value of i is ${i}`)
}