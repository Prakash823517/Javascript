// once constant is assigned it can not be changed
const accountId = 144553 
let accountEmail = "prakash@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // do not write variable without any data type
let accountState;
/*
prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 2  //not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
