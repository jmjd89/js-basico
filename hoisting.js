/**
 * BUENAS PRACTICAS!!!!
 * Todas las funciones se declaran al inicio del código.
 * Despues de las funciones se declaran las variables
 * Antes de crear una variable habrá que crearla y asignarla.
 */
/**
 * Hoisting: Llamar a una variable sin haberla declarado e inicializado.
 * Se devuelve undefined
 * JIT Compiler
 * Las variables y las funciones se procesan antes.
 * Primero se llaman a las funciones y se declaran.
 * El hoisting para las variables solo aplica para su declaración y no su asignación.
 */
console.log(miNombreDePila);



/**
 * Todas las variables sin inicializar JS las inicializa con undefined.
 */
var miNombreDePila = "Juan Manuel";