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