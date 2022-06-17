import Router from "express";
import * as propiedadController from '../controllers/propiedad.controller'

import { verifyToken } from "../middlewares";

const router = Router();

router.get('/', propiedadController.getPropiedades)

router.get('/:propiedadId', propiedadController.getPropiedadId)

router.post('/:propiedadId', verifyToken, propiedadController.createPropiedad)

router.put('/:propiedadId', verifyToken, propiedadController.updatePropiedad)

router.delete('/:propiedadId', verifyToken, propiedadController.deletepropiedad)

export default router