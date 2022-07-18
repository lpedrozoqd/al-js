import fetch from 'node-fetch';

const API = "https://api.escuelajs.co/api/v11";

async function fetchData(urlAPI) {
    try {
        console.log("****** Iniciando petición ********")
        console.log(`>>> URL: ${urlAPI}`);
        const response = await fetch(urlAPI);
        const data = await response.json();
        console.log(data);
        console.log("****** finalizando petición ********")
        return data;
    } catch (error) {
        console.error(error);
    }
}

const anotherFn = async(urlAPI) => {
    try {
        const products  = await fetchData(`${urlAPI}/products`);    
        if (products.statusCode != undefined){
            console.log(">>>>>>>> " + products.statusCode);
            console.log("Error!!");
            return;
        }
        const product   = await fetchData(`${urlAPI}/products/${products[0].id}`);
        const category  = await fetchData(`${urlAPI}/categories/${product.category.id}`);
        console.log(product);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}

anotherFn(API);