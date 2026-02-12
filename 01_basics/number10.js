const score = 400
console.log(score)    

// number as an object
const balance = new Number(100)
console.log(balance);
console.log( typeof balance);
// to convert into string
console.log(balance.toString())
console.log(balance.toString().length)

//to fixed the number utpo 2 decimal digits and remove extra decimal digits
console.log(balance.toFixed(2))

const otherNumber = 123.8966
// to round off within 4 digits 
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000000
// to apply the comma between numbers between each 3 digits 
console.log(hundreds.toLocaleString());

// for indian standard
console.log(hundreds.toLocaleString('en-IN'));

// Number.MAX_VALUE --> maximum value a number can contains
// Number.MIN_VALUE  --> minimum value a number can contains 
