// Utilizar funcionalidades del Ecmascript 6
'use strict'
var express = require('express');
var app = express();
app.use(express.json())
const cors = require('cors')

// var corsOptions = {
//   origin: 'http://localhost:3000/',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use(cors())

var inv_routes = require('./routes/inv.routes.js');

app.use('/', inv_routes);

// app.use('/', (request, response) => {
//   response.json({ 'hola': 'mundo' })
// })

module.exports = app;