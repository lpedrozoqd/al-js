import fetch from 'node-fetch';
const API  = "https://api.escuelajs.co/api/v1";

console.log(":: node-fetch-list-products ::");

function fetchData(urlAPI){
    return fetch(urlAPI);
} 

fetchData(`${API}/products`)
    .then(response => response.json())  //Aquí obtengo toda la respuesa general
    .then(products => console.log(products))
    .catch(error=>console.error(error));

