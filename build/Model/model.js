"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var modelSchema = Schema({
  name: String,
  profesion: String
});
module.exports = mongoose.model('model', modelSchema);