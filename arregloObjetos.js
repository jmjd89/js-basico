var articulos =[
    {nombre: "bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "libro", costo: 320},
    {nombre: "celular", costo: 10000},
    {nombre: "laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifonos", costo: 1700}
];

/**
 * El parametro articulo se refiere al tipo de los elementos contenidos en el array
 * filter nos regresa otro array con el filtro aplicado
 * devuelve todos los que cumplan la condiicion
 */

var filtro = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

/**
 * Para el caso de arrays de objetos, nos devuelve un arreglo de un dato obtenido.
 * map nos devuelve un array con el tipo de dato seleccionado.
 */

var mapeado = articulos.map(function(articulo){
    return articulo.nombre;
});

/**
 * Find encontrar algo dentro del array
 * Solo devuelve el primero conincidente con la condicion
 * Nos devuelve un nuevo array con el resultado de la busqueda
 */

var encontrar = articulos.find(function(articulo){
    return articulo.nombre === "teclado";
});

/**
 * foreach
 */

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

/**
 * Some
 * Validación de una condición sobre un array
 * retorna un boolean sobre la validación del array
 */

var someArray = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
