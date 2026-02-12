// object created by constructor is singleton 
// object created by literals is not singleton it has multiple instances

//constructor method singleton
// Object.create 

//object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    // to use sybol as a key 
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

JsUser.email = "hitesh@chatgpt.com"
// to lock the object so that no change will be possible further 
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsofrt.com"
console.log(JsUser);
// console.log(JsUser.email) // mostlty used method
// console.log(JsUser["email"])
// // console.log(JsUser.full name)  // wrong method 

// console.log(JsUser["full name"])

// symbol can only be access by this method
console.log(JsUser[mySym])

JsUser.greeting = function(){
    console.log("Hello JS User");
}
// if we want to take reference of same object and want to access the property 
// of the object then apply this 
JsUser.greetingTwo= function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
console.log(JsUser);



