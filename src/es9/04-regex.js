/**
 * ([0-9]{4}) = aquí se establece: 4 dígitos entre el 0 y el 9
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');

//La mejora es esta: sacar la info por grupo:
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);
