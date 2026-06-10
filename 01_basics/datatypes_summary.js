//  primitive

// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId) // false

const bigNumber = 3333334567777777776n





// Reference (non premitive)

// Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "roshan",
    age: 22,
}


const Myfunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);