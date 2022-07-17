const helloPromise = () => {
    return new Promise((resolve,reject) =>{
        if (true)
            resolve("Hey!");
        else
            reject("Bad!!");
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=>console.log("Finalizado!"));