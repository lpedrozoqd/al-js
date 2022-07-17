{
    var globalVar = "gloval var"
}

{
    let globalLet = 'global let';
    console.log(globalLet);
}

console.log(globalVar);

//Esta impresión falla: sólo en el bloque en el que está.
//console.log(globalLet);

const a = 'b';
console.log(a);
