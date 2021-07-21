//-======================Valores primitivos

var cadena = "Juan Manuel Jiménez Durán";
var bandera = false;
console.log("algo");
var numeroEntero = 50;

/*
    Valores vacíos / Valores reservados, valores faltantes.
    null
    undefined

    Evitar el uso de undefined, ya que es un tipo generado por javascript para los errores.
*/

//-======================End Valores primitivos

/*  Valores no primitivos, tipo objeto*/

var arreglo = [1,2,3];
var objeto = {
nombre: "Juan",
edad:32,
casado:true
};


/*
    La palabra clave reservada: typeof , nos indica el tipo que le pasemos como argumento.
    si no encuentra el tipo, resulta en undefined

    typeof null  , lo marca como object
    typeof undefined, lo marca igual como undefined
    typeof [], lo marca como tipo object
    typeof {}, lo marca comi tipo object
*/
