// Ejemplo de tipado en TypeScript:
// Se especifica el tipo de cada variable (number, string, etc.)
var a: number = 5;
var b: number = 10;

a = 5; // Se puede reasignar valores del mismo tipo
// b = "5"; //! error: no se puede asignar un string a una variable tipo number

var str: string = "hola";
// var result: number = a + "5"; // Esto daría error porque "5" es string

// Operaciones y resultados
console.log(a + b);   // Suma de dos números
console.log(a + str); // Concatenación: convierte 'a' a string y lo une con
