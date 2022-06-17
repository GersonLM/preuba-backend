"use strict";

var express = require('express');

var modelController = require('../controllers/model');

var router = express.Router();
router.get('/model', modelController.model);
router.post('/env', modelController.env); //rutas

router.post('/save', modelController.save);
module.exports = router;