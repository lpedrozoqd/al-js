//Esto lo que hace es guardar como el estado de 
//las ejecuciones para devolver de manera secuencial
//los valores según implementación

function* holaMundo() {
    if (true)
        yield 'Hola!';

    if (true)
        yield 'Mundo!';        
}

const generatorHolaMundo = holaMundo();
console.log(generatorHolaMundo.next().value);
console.log(generatorHolaMundo.next().value);