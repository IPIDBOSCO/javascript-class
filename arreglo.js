let arr = [1, 2, 3, 4, 5];

console.log('Mi arreglo: ', arr);

// Para acceder al primer valor, no se debe confundir con numeros normales
console.log('Primer numero: ', arr[1]);

// Se debe iniciar desde el 0
console.log('Primer numero real: ', arr[0]);

// Un arreglo en JavaScript puede contener cualquier tipo de dato
let algo = [
  'a',
  23,
  true,
  undefined,
  [1, 2, 3],
  () => console.log('hola mundo'),
  { nombre: 'ana' },
];

console.log('Cualquier dato: ', algo);
//! No es recomendable hacer esto, siempre se recomienda que un arreglo solo tenga un solo tipo de dato a la vez

// Propiedades de los arreglos

// Ver longitud del arreglo
console.log('Tiene ', arr.length);

// Añade un nuevo item al final
arr.push(6);
console.log('Nuevo arr: ', arr);

// Añade un item al principio
arr.unshift(0);
console.log('Nuevo arr-2: ', arr);
arr.splice(0, 0, -1);
console.log('Nuevo arr-3: ', arr);
arr = [-2, ...arr];
console.log('Nuevo arr-4: ', arr);

// Borrar elementos
// pop borra el ultimo elemento del arreglo
let num = arr.pop();
console.log('Elemento eliminado: ', num, arr);

// shift borra el primer elemento de la lista
num = arr.shift();
console.log('Elemento eliminado', num, arr);

// ver un elemento fuera de la longitud del arreglo
try {
  //! Dara error
  console.log(arr[10]);
} catch (e) {
  console.log('Si, dio error');
}

// Iterar un arreglo

console.log('Iteracion con for');
for (let i = 0; i < arr.length; i++) {
  let item = arr[i];
  console.log(item);
}

console.log('Usando forEach');
arr.forEach(function (item, index) {
  console.log(item);
});

console.log('Usando for..of');
for (item of arr) {
  console.log(item);
}
