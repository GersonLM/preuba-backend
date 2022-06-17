import Router from "express";

import * as authController from "../controllers/auth.controllers"
const router = Router();

router.post('/login', authController.login);
router.post('/registrarse', authController.registrar);

export default router