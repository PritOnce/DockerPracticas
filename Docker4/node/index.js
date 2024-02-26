var express = require('express');
var app = express();

var mysql = require('mysql');

app.set('view engine', 'ejs');
app.set('views', __dirname);

const dbConfig = {
  host: process.env.HOST,
  user: 'dbuser',
  password: 's3kreee7',
  database: 'my_db'
};

const getConnection = () => {
  try {
    const connection = mysql.createConnection(dbConfig);
    console.log("Conexión establecida");
    return connection;
  } catch (error) {
    console.log(error);
    throw new Error("Error al conectar con la base de datos");
  }
};
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/bd', (req, res) => {
  const connection = getConnection();
  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
    res.json(rows[0].solution);
  });
});

app.get("/insertar_registros", function (req, res, next) {
  res.render("insertar_registros", { title: "insertar_registros" });
});

app.post("/insertar_registros", (req, res) => {
  try {
    const { nombre, dni, telefono, correo } = req.body;

    console.log(req.body);
    
    const connection = getConnection();
    connection.query(
      "INSERT INTO registros (nombre, dni, numero_de_telefono, correo) VALUES (?, ?, ?, ?)",
      [nombre, dni, telefono, correo],
      function (err, result) {
        if (err) {
          console.log(err);
          res.status(500).send("Error al registrar el usuario");
        } else {
          console.log("Usuario registrado correctamente");
          res.send("Usuario registrado correctamente");
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al registrar el usuario");
  }
});


app.get('/consultar_registros', (req, res) => {
  const connection = getConnection();
  connection.query('SELECT * FROM registros', function(err, rows, fields) {
    if (err) throw err;
    console.log('Registros encontrados:', rows);
    res.json(rows);
  });
});

app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});