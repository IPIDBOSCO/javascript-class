//
// Definimos una clase llamada 'Persona'
class Persona {
  // El constructor recibe dos parámetros: nombre y edad
  constructor(nombre, edad) {
    // Asignamos los valores recibidos a las propiedades del objeto
    this.nombre = nombre;
    this.edad = edad;
  }
  // Método para mostrar un saludo en consola
  saludar() {
    console.log('Saludos!! Mi nombre es ' + this.nombre);
  }
}

// Creamos una instancia de la clase Persona
const persona = new Persona('Ismael', 23);

// Llamamos al método saludar de la instancia persona
persona.saludar();

// Creamos un objeto persona2 usando la sintaxis de objeto literal
const persona2 = {
  nombre: 'Ana', // Propiedad nombre
  edad: 32, // Propiedad edad
  // Método saludar que muestra un saludo en consola
  saludar: function () {
    console.log('Saludos!! Mi nombre es ' + this.nombre);
  },
};

// Llamamos al método saludar del objeto persona2
persona2.saludar();

// Acceder a las propiedades y claves de un objeto
const myObjeto = {
  nombre: 'Cosa',
  lugar: 'Casa',
  propietario: 'Yo',
  color: 'verde',
};

const keys = Object.keys(myObjeto);

console.log('Claves del objecto: ', keys);

console.log('El color es: ', myObjeto.color);
console.log('El lugar es: ', myObjeto['lugar']);

// Iterar las propiedades del objeto
keys.forEach((key) => {
  console.log(key + ': ' + myObjeto[key]);
});

console.log('Usando for..in');
for (key in myObjeto) {
  console.log(key + ': ' + myObjeto[key]);
}
