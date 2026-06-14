// arrays

const myarray = [0,1, 2, 3, 4, 5]



const myheroes = ["iron man", "spider man"]


// array methods

myarray.push(6)
console.log(myarray);


myarray.pop()
myarray.push()
console.log(myarray)

myarray.unshift(9)
myarray.shift()
console.log(myarray)



console.log(myarray.includes(78));  //false


console.log(myarray.indexOf(2))

const newarr = myarray.join()

console.log(myarray);
console.log(newarr)



// slice, spice

console.log("A ", myarray)

const myn1 = myarray.slice(1,3)
console.log(myn1)

console.log("B ", myarray)
const myn2 = myarray.splice(1,3)

console.log(myn2)

