var i = 0;

// Bucle while que se ejecuta mientras i sea menor que 10
while (i < 10) {
  console.log('El valor de i es: ' + i);
  i++; // Incrementa i en 1 en cada iteración
  // i = i + 1
  // i += 1
}

// for (;;){}

// Bucle for que se ejecuta desde 0 hasta 9
for (var j = 0; j < 10; j++) {
  console.log('El valor de j es: ' + j);
}

/** *!  evitar bucles infinitos
while (true) {
  console.log('Esto es un bucle infinito');
}

for (;;) {
  console.log('Esto es un bucle infinito');
}

for (var k = 0; k < 10; ) {
  console.log('El valor de k es: ' + k);
}

for (var m = 0; ; m++) {
  console.log('El valor de m es: ' + m);
}

for (var n = 0; n < 10; n --){
  console.log('El valor de n es: ' + n);}
*/

do {
  console.log('Esto se ejecuta al menos una vez');
} while (false);
