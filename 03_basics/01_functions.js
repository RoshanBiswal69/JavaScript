function saymyname(){
    console.log("r")
     console.log("o")
      console.log("s")
       console.log("h")
        console.log("a")
         console.log("n")

}

saymyname()

/*function addtwonumber(number1, number2){
   console.log(number1 + number2)
}*/

addtwonumber(3, 4)
const result = addtwonumber(3, 7)
console.log("result: ",result);


function addtwonumber(number1, number2){
   let result = number1 + number2
   return result;
}

// console.log("result: ",result);

function loginusermesssage(username){
    if(!username){ // (username === undefined)
console.log("please enter a username");
return
    }
return `${username} just logged in`
}

console.log(loginusermesssage("roshan"))


function calculateCartPrice(...num1){
return num1
}

console.log(calculateCartPrice(200,400,500))

const user = {
    username: "roshan",
    price: 999
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject ({
    username: "roshan",
    price: 899
})

const myNewArray = [200, 300, 400]

function returnSecondValue(getArray){
       return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400]))
