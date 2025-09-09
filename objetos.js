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

var objetos = 5;
