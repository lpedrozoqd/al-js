const holaMundo = () => {
    return new Promise((resolve,reject)=>{
        (false)
            ? setTimeout(() => resolve("Recibido!"),1500)
            : reject(new Error("NO recibido!!"))
    })
};

const holaMundoAsync = async() => {
    try {
        const hola = await holaMundo();    
        console.log(hola);
    } catch (error) {
        console.log(error);
    }
};


holaMundoAsync();