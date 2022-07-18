import fetch from 'node-fetch';
const API  = "https://api.escuelajs.co/api/v1";

console.log("******************************************************");
console.log(":: node-fetch  create-product ::");
console.log("******************************************************");

function postData(urlAPI,data){
    const response = fetch(urlAPI,{
        method : 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data =
{
    "title": "clarape",
    "price": 10,
    "description": "It's a new dish ",
    "categoryId": 1,
    "images": [
        "https://placeimg.com/640/480/any"
    ]
};

postData(`${API}/products`,data)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error));
