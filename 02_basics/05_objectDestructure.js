const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor)
//another way of printing(accessing) property of an object
const {courseInstructor : instructor} = course
// instructor replace courseInstructor
// now courseInstructor no longer exist
// console.log(courseInstructor)
console.log(instructor)

// all type of api are in JSON format
// JSON (inside curley braces)
// object has a variable name but JSON han no name 
// key will be string
// {
//     "name": "hitesh",
//     "coursename": "js in Hindi",
//    " price": "free",
//    "id": 128347,
//    "nite_admin": false

// }

// // another type of api
// [
//     {}, // object
//     {},
//     {}
// ]