'use strict'
const { model } = require('mongoose');
var Inv = require('../models/inv.model');

const crear_invitacion = async (request, response) => {
  // return response.json(request.body)

  var { cod_uniq } = request.body;
  if (!cod_uniq) return response.status(404).end()
  let _inv = await Inv.find({ cod_uniq })
  if (_inv.length != 0) return response.json({ "message": "El codigo esta en uso" })

  const inv = Inv(request.body)
  const res = await inv.save()
  if (res) return response.json(res)
  return response.json({ "message": "error" })
}

const listar_inv = async (req, res) => {
  let inv = await Inv.find()
  res.json(inv)
}

const buscar_cod = async (req, res) => {
  var { cod_uniq } = req.params;
  if (!cod_uniq) return res.status(404).end()
  let inv = await Inv.find({ cod_uniq })
  res.json(inv)
}

const update_doc = async (req, res) => {
  var data = req.body;
  if (!data.cod_uniq) return response.status(404).end()
  let _inv = await Inv.find({ cod_uniq: data.cod_uniq })
  if (_inv.length == 0) return response.json({ "message": "No hay coicidencias" })
  console.log(data.invitados)
  const $res = await Inv.updateOne(
    { cod_uniq: data.cod_uniq },
    {
      $set:
        { ...data }
    }

  )
  return res.json($res)
}

module.exports = { crear_invitacion, listar_inv, buscar_cod, update_doc }