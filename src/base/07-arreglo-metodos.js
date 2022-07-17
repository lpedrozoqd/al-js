let articulos = [
    {nombre:"Bici",costo:2000},
    {nombre:"Celular",costo:45000},
    {nombre:"laptop",costo:300000},
    {nombre:"audifonos",costo:7600},
    {nombre:"tv",costo:120000}
];

let encuentraArticulos = articulos.find(function (articulo) {
    return articulo.nombre === "tv"
});

console.log(encuentraArticulos);

articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
});

let articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 7500;  
});

console.log(articulosBaratos);