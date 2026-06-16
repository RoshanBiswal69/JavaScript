// const tinderUser = new Object()    // singleton object 

const tinderUser = {}

 tinderUser.id = "123abc"
tinderUser.name = "roshan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);



const regularUser = {
    email: "roshan@gmail.com",
    fullname:{
        userName: {
            firstName: "roshan",
            lastName: "biswal"
        }
    }
}

//  console.log(regularUser.fullname.userName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
 // const obj3 = Object.assign({},obj1, obj2)

 const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "roshan@gmail.com"
    },
     {
        id: 1,
        email: "roshan@gmail.com"
    },
     {
        id: 1,
        email: "roshan@gmail.com"
    },
     {
        id: 1,
        email: "roshan@gmail.com"
    },
     {
        id: 1,
        email: "roshan@gmail.com"
    },
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    name: "js-hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//  course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor)

/*{
    "name": "roshan",
    "coursename": "js-hindi",
    "price": "999"

}
    */


