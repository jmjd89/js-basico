/**
 * Funciones:
 * Existen dos tipos de funciones: Declarativas y de Expresión
 */

/**
 * Declarativas
 * Para una función también se reserva un espacio de memoria para el tipo de retorno
 */

function miFuncion()
{
    return 3;
}

miFuncion();

/**
 * Funciones de Expresión.
 * Tambien conocidas como funciones anonimas
 */

var miFuncionDos = function(a,b){
    return a + b
}

miFuncionDos(1,2);

function saludar(nombre){
    console.log(`Saludos ${nombre}`);
}

function suma(a,b){
    var resultado = a + b;
    return resultado;
}