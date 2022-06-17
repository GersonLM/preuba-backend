'use strict'; //cargar modulos de node para crear servidor

var express = require('express');

var bodyParser = require('body-parser'); //ejecutar express


var app = express(); //cargar rutas

var model_routes = require('./routes/model'); //Middlewars


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json()); //CORS
//añadir prefijos a rutas / cargar rutas

app.use('/api', model_routes); //Exportar modulo 

module.exports = app;