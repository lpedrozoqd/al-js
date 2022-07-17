let name = "Leo";
let age = 43;

obj = {name: name, age:age};
console.log(obj);

//Aquí viene el cambio: los valores son las mismos
//nombres de los atributos en cuanto a su valor
obj2 = {name,age};
console.log(obj2);