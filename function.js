

// (function(name){
//     console.log(`hello ${name}`);
// })('Rakib');


// const sum = function(number1,number2){
//     return number1 + number2;
// }
// console.log(sum(2,3));


// function sum(number1, number2){
//     return number1 + number2;
// }
// console.log(sum(2,4));

// const todo = ['javascript','java','homework','food'];

// for(let i = 0; i < todo.length;i++){
//     console.log(`${todo[i]}`);
// }

let myCar ={
    model : "car",
    engine : 'good',
    price : 10000,
}
for(let key in myCar){
    console.log(`${key}: ${myCar[key]}`);
}
