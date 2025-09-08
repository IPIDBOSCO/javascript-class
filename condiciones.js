// Ejemplo básico de condicional if-else
if (4 > 5) {
  console.log('Es mayor');
} else {
  console.log('No es mayor');
}

var a = 5;

// Ejemplo de if anidados (no recomendable, menos legible)
if (a > 2) {
  if (a < 10) {
    console.log('a es mayor que 2 y menor que 10');
  }
}

// Mejor usar conectores lógicos para condiciones múltiples
if (a > 2 && a < 10) {
  console.log('a es mayor que 2 y menor que 10');
}

if (a > 2 && a < 4) {
  console.log('a es mayor que 2 y menor que 4');
}
// El conector && significa "y", ambas condiciones deben ser verdaderas

a = 3;

// Ejemplo de if separados (no recomendable, puede ser confuso)
if (a > 2) {
  console.log('Es correcto');
}
if (a < 4) {
  console.log('Es correcto');
}

// Uso del operador lógico OR (||)
// El conector || significa "o", basta que una condición sea verdadera
if (a > 2 || a < 4) {
  console.log('Es correcto, con OR');
}

//* Ejemplos de condicionales numéricas
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

// Comparación con == (compara solo valor, no tipo)
if (5 == '5') {
  console.log('5, Son iguales');
}

// Comparación con === (compara valor y tipo)
if (5 === '5') {
  console.log('5, Son iguales y del mismo tipo');
}

// Ejemplo de múltiples condiciones en una sola expresión
var nota2 = 8;

if (nota2 > 6 && nota2 < 9 && nota2 != 7) {
  console.log('Aprobo, pero no con un 7');
}
