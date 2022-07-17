const holaMundo = () => {
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(() => resolve("Recibido!"),1500)
            : reject("Error al recibir")
    })
};

const holaMundoAsync = async() => {
    const hola = await holaMundo();
    console.log(hola);
};


/*
//De esta manera se obtiene respuesta de una "promesa":
holaMundo()
    .then(response => console.log(response))
    .catch(error => console.log( ));
*/

holaMundoAsync();