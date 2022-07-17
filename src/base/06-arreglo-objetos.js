let articulos = [
    {nombre:"Bici",costo:2000},
    {nombre:"Celular",costo:45000},
    {nombre:"laptop",costo:300000},
    {nombre:"audifonos",costo:7600},
    {nombre:"tv",costo:120000}
];

let articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 45000
});

console.log(articulosFiltrados);

let nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
});

console.log(nombreArticulos);

