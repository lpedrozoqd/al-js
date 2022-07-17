//Ejemplo para sumar dos elemento:
function suma(num1, num2) {
    return num1 + num2;
}

function call(num1,num2,callback) {
    return callback(num1,num2)
}


console.log(call(1,2,suma));

