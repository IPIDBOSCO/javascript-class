function suma(a, b) {
  let resultado = a + b;
  return resultado; // return a + b;
}

console.log('Resultado de la suma: ', suma(2, 4));
console.log('Referencia de la funcion: ', suma);

function hola() {
  console.log('Hola, desde la función');
}

hola();

// Arrow function o funciones flecha
const resta = (a, b) => {
  return a - b;
};

console.log('El resultado de la resta es: ', resta(10, 3));

// Función anónima
(() => {
  console.log('Hola desde función anónima');
})();

const operation = (num1, num2, num3) => {
  let resultado = num1 + num2;
  resultado = resultado - num3;
  resultado = resultado * num1;
  return resultado;
};

// module.exports = operation;
export default operation;
