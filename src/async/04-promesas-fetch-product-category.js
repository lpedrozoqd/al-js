import fetch from 'node-fetch';
const API  = "https://api.escuelajs.co/api/v1";
console.log("******************************************************");
console.log(":: node-fetch-product-category ::");
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
    .then(product => {
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(responseCategoryJSON => responseCategoryJSON.json())
    .then(responseCategory => console.log(responseCategory))
    .catch(error=>console.error(error))
    .finally(() => console.log("petición finalizada!")) ;
