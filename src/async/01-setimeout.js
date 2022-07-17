//Con setTimeout podemos ejecutar una tarea
//después de 'x' tiempo. En este caso 2000 ms (2 seg)
//...por si misma ya es una función callback
setTimeout(function() {
    console.log("Hola JS!")
},2000);

function hola(nombre) {
    console.log(`Hola ${nombre}`);
}

setTimeout(hola,2000,"Leonel!");

