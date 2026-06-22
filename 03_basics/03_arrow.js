const user = {
    username: "roshan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
          console.log(this)
    }

}

//user.welcomeMessage()
//user.username = "rb"

//user.welcomeMessage()

// console.log(this)     //output :-  {}

/*function chai(){
    let username = "roshan"
    console.log(this.username);
}

chai()
*/

const chai = () => {
    let username = "roshan"
    console.log(this);
}

// chai()

/*
const addtwo = (num1, num2) => {
    return num1 + num2
}

console.log(addtwo(1, 2))
*/


const addtwo = (num1, num2) => num1 + num2

console.log(addtwo(4, 5));

