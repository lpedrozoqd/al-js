

const fnAsync = ()=>{
    //console.log("******* INIT: fnAsync ******* ");
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(()=>resolve("Async!!!"),2000)
            : reject(new Error("Error!"));
    });
}

const anoteherFn = async()=>{
    //console.log("******* INIT: anotherFn ******* ");
    const something = await fnAsync();
    console.log(something);
    console.log("Hello anotherFn");
    //console.log(">>>>>>> END: anotherFn >>>>>>>");
}

console.log("######### Before execution #########");
anoteherFn();
console.log("######### After execution #########");
