const persons = [
    {name:'Leo',age:43},
    {name:'Rebeca',age:16},
];

let listOfNames = persons.map(function (person) {
    return person.name
});

console.log(listOfNames);

let listOfNames2 = persons.map(person => person.age);
console.log(listOfNames2);

const listOfNames3 = (name,age,country) => {
    //aquí va el código
};

const square = num => num*num;
console.log(square(4));

