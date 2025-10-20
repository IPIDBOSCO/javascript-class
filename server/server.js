import express from 'express';
import path from 'path';

const PORT = 3000;

const app = express();

const basePath = path.join(process.cwd(), 'page');

// Esto es un middleware que permite interpretar JSON en las solicitudes
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola desde mi servidor web');
});

app.get('/about', (req, res) => {
  res.send('Aquí va el about');
});

app.get('/hello', (req, res) => {
  res.send('Hola desde GET');
});

app.post('/hello', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send('Hola desde POST');
});

app.get('/params/:name', (req, res) => {
  const { name } = req.params;
  res.send('Hola ' + name);
});

const objeto = {
  hola: 'Soy un objeto',
  edad: 1,
  obj: {
    hijo: 'soy un objeto anidado',
  },
};

app.get('/api/json', (req, res) => {
  res.json(objeto);
});

app.get('/page', (req, res) => {
  res.sendFile(path.join(basePath, 'example.html'));
  // res.sendFile('../page/example.html'); // ! Rutas relativas no funcionan
});

app.listen(PORT, () => {
  console.log('Servidor listo en http://localhost:' + PORT);
});
