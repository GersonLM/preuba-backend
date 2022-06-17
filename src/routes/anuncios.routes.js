import Router from "express";
import * as anunciosController from '../controllers/anuncios.controller'

import { verifyToken } from "../middlewares";
// import multipart from "connect-multiparty";

const router = Router();

const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './upload'});

router.get('/', anunciosController.getAnuncios)

router.get('/:usuarioId', anunciosController.getAnuncioUsuarioId)

router.get('/:anuncioId', anunciosController.getAnuncioId)

router.post('/', verifyToken, anunciosController.createAnuncio)

router.put('/:anuncioId', verifyToken, anunciosController.updateAnuncio)

router.delete('/:anuncioId', verifyToken, anunciosController.deleteAnuncio)

router.post('/upload-img/:anuncioId', md_upload, anunciosController.upload)


export default router