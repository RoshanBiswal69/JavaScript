const name = "roshan"
const repoCount = 5
// console.log(name + repoCount + " value");


console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Roshan')

console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))


const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-5,4)
console.log(anotherString)


const newStringone = "       roshan       "

console.log(newStringone);
console.log(newStringone.trim());



const url = "https://roshan.com/roshan%07biswal"

console.log(url.replace('%07', '-'))

console.log(url.includes('roshan'))


console.log(gameName.split('-'))