// Declaración de variables con var, let y const
var a = 5;
var b = 6;

var c = a + b; // Suma de dos números

console.log(c); // Imprime el resultado de la suma

const d = 6; // Constante, no se puede reasignar

a = 2; // Reasignación permitida con var
// d = 2; //! dara error - no se puede reasignar una constante

let h = 1; // let permite reasignar y tiene alcance de bloque

// Ejemplos de tipos de datos en JavaScript
console.log('Numero: ', typeof 5);
console.log('String: ', typeof 'hola');
console.log('Booleano: ', typeof true);
console.log('Objeto: ', typeof {});
console.log('Null: ', typeof null); // null es un objeto por una peculiaridad de JS
console.log('Indefinido: ', typeof undefined);
console.log('Arreglo: ', typeof []); // Los arreglos son técnicamente objetos

// Cambio de tipo de variable
a = 'hola'; // Ahora 'a' es un string
