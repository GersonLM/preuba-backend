'use strict';

var mongoose = require('mongoose');

var app = require('./app');

var port = 3900; //configuraciones para trabajar con mongodb

mongoose.Promise = global.Promise; //conexion a mongodb

mongoose.connect('mongodb://localhost:27017/api_prueba', {
  useNewUrlParser: true
}).then(function () {
  console.log("conexion a la MongoDB correcta"); //crear servidor y escuchar peticiones

  app.listen(port, function () {
    console.log("Servidor corriendo en http://localhost:".concat(port));
  });
});