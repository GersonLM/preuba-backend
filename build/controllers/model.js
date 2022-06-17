'use strict';

var controller = {
  //ruta de prueba api
  model: function model(req, res) {
    return res.status(200).send({
      name: "Prueba tecnica",
      autor: "Gerson Lopez"
    });
  },
  env: function env(req, res) {
    var param = req.body.name;
    return res.status(200).send({
      message: "...",
      param: param
    });
  },
  save: function save(req, res) {
    return res.status(200).send({
      message: "metodo para guardar"
    });
  }
};
module.exports = controller;