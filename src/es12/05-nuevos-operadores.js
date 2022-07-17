/*
**Antes de ES2021
x && (x = y)
x || (x = y)
x ?? (x = y)

*/

let isTrue = true;
let isFalse = false;
//Nuevos operadores
//AND ('&&=') en caso de cumplirse una verdad, asigna un valor a una variable
console.log(isTrue &&= isFalse);


let isTrue2 = true;
let isFalse2 = false;
//Nuevos operadores
//OR ('||=') en caso de cumplirse una falsedad, asigna un valor a una variable
console.log(isTrue2 ||= isFalse2); 

let isTrue3 = undefined;
let isFalse3 = false;
//Nuevos operadores
//OR ('??=') en caso de cumplirse un undefined o null, asigna un valor a una variable
console.log(isTrue2 ??= isFalse2); 
