//Función declarativa
function miFuncion(){
    return 4;
}

//Expresión de función
let miFuncionExpr = function(a,b){
    return a + b;
}


console.log("Fnc declarativa: " + miFuncion());
console.log("Fnc expresión: " + miFuncionExpr(1,2));

function fncUsandoComillas(arg){
    console.log(`Hola ${arg}`);
}

fncUsandoComillas("Leonel!");

