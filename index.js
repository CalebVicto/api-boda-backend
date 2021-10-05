// Utilizar funcionalidades del Ecmascript 6
'use strict'

var mongoose = require('mongoose');
var app = require('./app');

var port = process.env.port || 3001;

mongoose.Promise = global.Promise;

// Config
let password = require('./password')
const link = `mongodb+srv://fullstack:${password}@cluster0.gv2kk.mongodb.net/boda?retryWrites=true&w=majority`

mongoose.connect(link)
  .then(() => {
    console.log("La conexión a la base de datos Boda se ha realizado correctamente")
  })
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log("servidor corriendo en http://localhost:" + port);
});