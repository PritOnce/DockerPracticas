const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
});

connection.connect();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/bd', (req, res) => {
  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
    res.json(rows[0].solution);
  });
});

// Nuevo endpoint para crear registros
app.get('/nuevos_registros', (req, res) => {
  const nuevoRegistro = { titulo: 'Nuevo Post', contenido: 'Contenido del nuevo post' };

  connection.query('INSERT INTO registros SET ?', nuevoRegistro, function(err, result) {
    if (err) throw err;
    console.log('Nuevo registro creado:', result.insertId);
    res.send('Nuevo registro creado con ID: ' + result.insertId);
  });
});

// Nuevo endpoint para consultar registros
app.get('/consultar_registros', (req, res) => {
  connection.query('SELECT * FROM registros', function(err, rows, fields) {
    if (err) throw err;
    console.log('Registros encontrados:', rows);
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// No cierres la conexión aquí, ya que la aplicación podría seguir recibiendo solicitudes.
// connection.end();
