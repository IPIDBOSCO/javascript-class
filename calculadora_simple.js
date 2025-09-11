const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1;
let num2;

rl.question('Ingrese primer número: \n', (num) => {
  num1 = Number(num);
  rl.question('Ingrese segundo numero: \n', (num) => {
    num2 = Number(num);
    console.log('El resultado de la suma es: ', num1 + num2);
    rl.close();
  });
});
