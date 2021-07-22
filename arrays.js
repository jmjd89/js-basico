/**
 * Arrays
 * array.length me devuelve el numero de elementos.
 * array[index] nos devuelve un elemento en cierta posición
 * Los elementos de un array se indexan a partir de cero.
 * array.push inserta un nuevo elemento al final del arreglo.
 * array.pop elimina el ultimo elemento del array
 * array.unshift inserta un elemento al inicio del array
 * array.shift elimina el primer elemento del array
 * array.IndexOf devuelve la posición indexada de cierto elemento
 */
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log(frutas);
console.log(frutas.length);

var masFrutas = frutas.push("Uvas");
var ultimo = frutas.pop();

var nuevaLongitud = frutas.unshift("Durazno");

var borrarFruta = frutas.shift();

var posicionCereza = frutas.indexOf("Cereza");
console.log(frutas[posicionCereza]);
