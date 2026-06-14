const marvel = ["thor", "iron man", "spider man" ]
const dc = ["superman", "batman", "flash"]

marvel.push(dc);
// console.log(marvel)

const allheroes = marvel.concat(dc)
console.log(allheroes)


const all_new_heroes = [...marvel, ...dc]

console.log(all_new_heroes)


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array = anotherArray.flat(Infinity)
console.log(real_array)




console.log(Array.isArray("roshan"))
console.log(Array.from("roshan"))
console.log(Array.from({name: "roshan"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));