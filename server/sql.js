import Database from 'better-sqlite3';

const database = new Database('ejemplo.db');

database.run(`
  CREATE TABLE IF NOT EXISTS users (
  id INTERGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  age INTERGER
  )  
`);

database.run(
  `
  INSERT INTO users (name,age)
  VALUES (?,?)`,
  ['Juan', 32],
  (error) => {
    if (error) {
      console.log('error al agregar usuario');
      return;
    }
    console.log('Usuario agreado');
  }
);

database.all('SELECT * FROM users', (error, filas) => {
  if (error) {
    console.log('Error al leer base de datos');
    return;
  }
  console.log('Usuarios encontrados');
  console.table(filas);
});

database.close((error) => {
  if (error) {
    console.log('Error al cerrar');
    return;
  }
  console.log('Base de datos cerrada');
});
