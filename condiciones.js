if (4 > 5) {
  console.log('Es mayor');
} else {
  console.log('No es mayor');
}

var a = 5;

//! No es recomendable
// if anidados
if (a > 2) {
  if (a < 10) {
    console.log('a es mayor que 2 y menor que 10');
  }
}

// Usar conectores lógicos
// and, &&
if (a > 2 && a < 10) {
  console.log('a es mayor que 2 y menor que 10');
}

if (a > 2 && a < 4) {
  console.log('a es mayor que 2 y menor que 4');
}
a = 3;

//! No es recomendable
// if separados
if (a > 2) {
  console.log('Es correcto');
}
if (a < 4) {
  console.log('Es correcto');
}

// Usar conectores lógicos
// or, ||
if (a > 2 || a < 4) {
  console.log('Es correcto, con OR');
}

//* Condicionales numericas
var nota = 7;

// mayor o igual que (>=)
if (nota >= 7) {
  console.log('Aprobo');
}

// menor que (<)
if (nota < 7) {
  console.log('No aprobo');
}

// igual que (==)
if (nota == 7) {
  console.log('Saco un 7');
}

// distinto que (!=)
if (nota != 7) {
  console.log('No saco un 7');
}

// igual que (==)
if (5 == '5') {
  console.log('5, Son iguales');
}

// igual y del mismo tipo (===)
if (5 === '5') {
  console.log('5, Son iguales y del mismo tipo');
}

// multiples condiciones
var nota2 = 8;

if (nota2 > 6 && nota2 < 9 && nota2 != 7) {
  console.log('Aprobo, pero no con un 7');
}
