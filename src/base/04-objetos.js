let miAuto = {
    marca:"Toyota",
    modelo:"Corolla",
    annio:2021
};

let miSuperAuto = {
    marca:"Toyota",
    modelo:"Corolla",
    annio:2021,
    detalleAuto: function (){
        console.log(`Autos ${this.modelo} ${this.annio}`)
    }
};

console.log(miAuto);
console.log(miAuto.annio);
miSuperAuto.detalleAuto();