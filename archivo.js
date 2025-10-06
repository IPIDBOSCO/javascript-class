import fs from 'fs';

/* fs.readFile('ejemplo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Error al leer el archivo', err);
    return;
  }
  console.log(data);
}); */

const data = fs.readFileSync('ejemplo.txt', 'utf-8');
console.log(data);

// Leer las calificaciones del archivo
const notas = fs.readFileSync('data.txt', 'utf-8');
console.log(notas);
// sin saltos de linea
console.log(notas.replace(/\n/g, ' '));

const lines = notas.split('\n');
console.log(lines);

const grades = lines.map((line) => {
  const nums = line.split(',');
  return nums;
});

console.log(grades);

const promedios = [];

for (let y = 0; y < grades.length; y++) {
  let suma = 0;
  for (let x = 0; x < grades[y].length; x++) {
    suma = suma + parseInt(grades[y][x]);
  }
  const promedio = suma / grades[y].length;
  promedios.push(promedio);
}

console.log(promedios);
