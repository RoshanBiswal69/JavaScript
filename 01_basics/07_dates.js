let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2026 , 0 , 23)
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(myTimeStamp.getTime());

console.log(Math.floor(Date.now()/1000));




newDate.toLocaleString('default', {
    weekday: "long",
    
})


