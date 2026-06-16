// singleton 

// object literals


const mySym = Symbol("key1")



const jsUser = {
    name:"roshan",
    age: 22,
    [mySym]: "myKey1",
    location:"raipur",
    email: "roshan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])

jsUser.email = "roshan@google.com"
//Object.freeze(jsUser)
jsUser.email = "roshan@chatgpt.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting2())
