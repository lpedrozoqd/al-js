function* generator() {
    yield 1;
    yield 2;
    yield 3;

}

const g = generator();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}
console.log("***************");
const it = iterate(['Leo','Claudia','Rebeca']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


