let person = {
    'name':'Leo',
    'age':43,
    'country':'CO'
};

console.log(person.name, person.age);

//Desestructuración es este:
let{name,age,country} = person;
console.log(name,age,country);
