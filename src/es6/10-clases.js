class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sumar(2,2));