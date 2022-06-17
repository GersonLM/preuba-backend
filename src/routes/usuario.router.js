import Router from "express";
import * as usuarioController from '../controllers/usuario.controller'

const router = Router();

router.get('/', usuarioController.getUsuarios)

router.get('/:usuarioId', usuarioController.getUsuarioId)

export default router