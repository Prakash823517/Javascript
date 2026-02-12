//singleton object
// const tinderUser = new Object()

// not singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const resgularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }
}

// console.log(resgularUser.fullname)
// console.log(resgularUser.fullname.userfullname)
// console.log(resgularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// always put an empty paranthesis it is a good method but it is not mendatory
// const obj4 = Object.assign( {}, obj1, obj2)
// const obj4 = Object.assign(obj1, obj2) // both are same
// console.log(obj3)
// console.log(obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    
]

console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser)); // it will return keys in an array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

// to check a property exist in the object or not 
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))


