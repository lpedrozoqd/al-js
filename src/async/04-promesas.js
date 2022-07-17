const promise1 = new Promise((resolve,reject)=>{
    resolve('Todo ok!');
});

let cows = 2;
const countCows = new Promise((resolve,reject)=>{
    if (cows > 10){
        resolve(`We have ${cows} cows on the famr!`);
    }else{
        reject('There is no cows on the farm');
    }
});

countCows
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(()=>console.log("Terminada ejecución"));



