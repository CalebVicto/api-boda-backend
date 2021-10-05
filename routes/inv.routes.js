'use strict'
var express = require('express');
var InvController = require('../controllers/inv.controller');
// Llamamos al router
var api = express.Router();

api.get('/admin', InvController.listar_inv);

api.post('/admin', InvController.crear_invitacion)

api.get('/:cod_uniq', InvController.buscar_cod)

api.put('/admin', InvController.update_doc)


module.exports = api;