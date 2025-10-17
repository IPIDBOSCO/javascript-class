import express from 'express';
import path from 'path';

const PORT = 3000;

const app = express();

const basePath = path.join(process.cwd(), 'page');

app.get('/', (req, res) => {
  res.send('Hola desde mi servidor web');
});

app.get('/about', (req, res) => {
  res.send('Aquí va el about');
});

app.get('/api/json', (req, res) => {
  res.json({
    hola: 'Esto es un JSON',
  });
});

app.get('/page', (req, res) => {
  res.sendFile(path.join(basePath, 'example.html'));
  // res.sendFile('../page/example.html'); // ! Rutas relativas no funcionan
});

app.listen(PORT, () => {
  console.log('Servidor listo en http://localhost:' + PORT);
});
