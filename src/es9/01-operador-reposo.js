const data = {
    name:"Leonel",
    age:43,
    country:"CO"
};

let {name, ...all} = data;

console.log(name,all);
