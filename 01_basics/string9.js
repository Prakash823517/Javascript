const name = "hitesh"
const repoCount = 50
console.log(name + repoCount + " Value");

// modern syntax for string concartination 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string as an object
const gameName = new String('hitesh-hc-com')
console.log(typeof gameName)
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // substring[start, end)
console.log(newString);

// negative value can be used only in slice method 
const anotherString = gameName.slice(-10, 6)
console.log(anotherString)

// trim is used to remove the starting and end space 
const newStringOne = "     hitesh     "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'))

