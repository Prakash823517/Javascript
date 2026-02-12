// date is a time in ms(mili second) and
// it is calculated from 1 january 1970 
//Date objects represent a single moment in time in a platform independent format

let myDate = new Date() // date object instance
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// in javascript if single digit month is provided then january start from zero 
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString())
// YY-MM-DD
let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString())
//MM-DD-YY
let myCreatedDate4 = new Date("01-15-2023")
console.log(myCreatedDate4.toLocaleString())

let myTimeStamp = Date.now() // current date from 1 jan 1970
console.log(myTimeStamp) 
console.log(myCreatedDate3.getTime()) 

// current time in second from 1st january 1970
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay()) // it will provide days number sunday starts from 0 and saturady has value 6
console.log(newDate.getFullYear())

// to customise the format of date
newDate.toLocaleString('default', {
    weekday: "long"
})