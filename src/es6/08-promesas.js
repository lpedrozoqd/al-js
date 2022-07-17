const helloPromise = () => {
    return new Promise((resolve,reject) =>{
        if (false)
            resolve("Hey!");
        else
            reject("Bad!!");
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));