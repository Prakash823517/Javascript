//Stack(Primitive), Heap(Non-primitive)
// it will store in stack 
let myYoutubename = "hiteshchaudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)
//it will store in heap 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

 