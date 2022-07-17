const promise1 = new Promise((resolve,reject)=> reject("reject 1"));
const promise2 = new Promise((resolve,reject)=> resolve("resolve 2"));
const promise3 = new Promise((resolve,reject)=> resolve("resolve 3"));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response))
    .catch(error => console.log(error));
    

