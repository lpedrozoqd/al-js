import fetch from 'node-fetch';
const API  = "https://api.escuelajs.co/api/v1";
console.log("******************************************************");
console.log(":: node-fetch-products ::");
console.log("******************************************************");

function fetchData(urlAPI){
    return fetch(urlAPI);
} 

fetchData(`${API}/products`)
    .then(response=>response.json())  //Aquí obtengo toda la respuesa general
    .then(products => {
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error=>console.error(error));
 
