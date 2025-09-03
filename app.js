const express = require('express');
// require('dotenv').config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Curso de expressjs</h1>
    <p>con el profe oscar de platzi</p>
    <p>Corriendo en el puerto: ${PORT}</p>
    `);
});

app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.send(`usuario con id: ${id}`);
});


app.get('/shearer', (req, res) => {
  const { terms = 'no hay termino' } = req.query;
  const { category = 'no hay categoria' } = req.query;
  res.send(`
    <h1>Buscador de shearer</h1>
    <p>Buscando por: ${terms}</p>
    <p>Categoria: ${category}</p>
  `);
})

app.listen(PORT, () => {
  console.log(`Aplicacion esta corriendo en http://localhost:${PORT}`);
});