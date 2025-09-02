const express = require('express');
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Curso de expressjs</h1>
    <p>con el profe oscar de platzi</p>
    <p>Corriendo en el puerto: ${PORT}</p>
    `);
});

app.listen(PORT, () => {
  console.log(`Aplicacion esta corriendo en http://localhost:${PORT}`);
});