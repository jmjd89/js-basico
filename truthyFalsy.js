//Se evalua como false
/**
 * Numero enteros a partir del 1 se evaluan como true
 */
Boolean(0);

//Se evalua como falso
Boolean(null);

/**
 * NaN: Not is a Number
 * 
 */

//Se evalua como falso
Boolean(NaN);

/**
 * undefined es el valor por defecto de la declaraciones
 */

//Se evalua como falso
Boolean(undefined);


//Se evalua como falso
Boolean(false);

/**
 * Cualquier cadena que no sea vacía se evalua como verdadera
 */

//Se evalua como falso
Boolean("");


//Se evalua como verdadero
Boolean([]);

//Se evalua como verdadero
Boolean({});

//Se evalua como verdadero
Boolean(function(){});

Boolean(true);



