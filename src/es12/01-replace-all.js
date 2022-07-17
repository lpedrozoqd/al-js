const cadena = "Javascript es maravilloso, con Javascript..";
const replacedString = cadena.replace("Javascript","Python");
console.log(replacedString); //sólo el 1er. elemento hace el reemplazo

const replacedString2 = cadena.replaceAll("Javascript","Python");
console.log(replacedString2);
