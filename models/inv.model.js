'use strict'
const mongoose = require('mongoose');
const { model, Schema } = mongoose

// Creamos el objeto del esquema y sus atributos
const invSchema = Schema({
  cod_uniq: {
    type: String,
    require: true,
  },
  invitados: [
    {
      nombre: { type: String, require: true },
      apellidos: { type: String, require: true },
      tipo: { type: Number, require: true },
      estado: { type: Number, default: '1' }
    }
  ]
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = model('Inv', invSchema);