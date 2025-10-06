'';
'';
``;

var text = 'Hola, soy un texto!  ';

console.log(text);
// longitud de la cadena de texto
console.log(text.length);

// eliminar espacios al inicio y al final
console.log(text.trim().length);

// convertir a mayusculas
console.log(text.toUpperCase());

// convertir a minusculas
console.log(text.toLowerCase());

// Los textos se comportan como arrays
console.log(text[0]);
console.log(text.charAt(0));

// Buscar una cadena dentro de otra
console.log(text.indexOf('soy'));
console.log(text.indexOf('z')); // -1 si no lo encuentra

// Itera una cadena de texto
for (let char of text) {
  console.log(char);
}

// Cortar una cadena
console.log(text.slice(0, 4));

console.log(text.split(' ')); // array de string

let texto_nuevo = text.trim().replace('Hola', 'Hello').concat('!!!');

console.log(texto_nuevo);

// separar por comas
let tags = 'javascript, html, css, web, mobile';
console.log(tags.split(', '));
