// Utilizar funcionalidades del Ecmascript 6
'use strict'

var mongoose = require('mongoose');
var app = require('./app');

var port = 3001;

mongoose.Promise = global.Promise;

// Config
let password = '65ozdw6SCwLsoaji'
const link = `mongodb+srv://fullstack:${password}@cluster0.gv2kk.mongodb.net/boda?retryWrites=true&w=majority`

mongoose.connect(link)
  .then(() => {
    console.log("La conexión a la base de datos Boda se ha realizado correctamente")

    app.listen(port, () => {
      console.log("servidor corriendo en http://localhost:3800");
    });
  })
  .catch(err => console.log(err));