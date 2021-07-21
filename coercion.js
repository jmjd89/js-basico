/**
 * Coerción implicita y explicita
 * Coerción: La forma en la que podemos cambiar un tipo de valor a otro tipo de valor.
 */

/**
 * Coerción implicita
 * El lenguaje nos ayuda a cambiar de un tipo de valor a otro tipo de valor.
 */

 var a =  4 + "7"
 //undefined
 //a
 //"47"
 //typeof(a);
 //"string"

 var a = 4 * "7";
 //undefined
 //a
 //28
 //typeof(a);
 //"number"

/**
 * Coerción Explicita
 * Obligamos la conversión de un tipo a otro tipo.
 */

 var a = 30;
//  undefined
 var b = a + "";
//  undefined
//  typeof(b);
//  "string"
 var c = String(a);
//  undefined
//  typeof(c);
//  "string"
 var d = Number(c);
//  undefined
//  typeof(d);
//  "number"

