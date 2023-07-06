import { Router } from "express";
import { crearUsuario, obtenerUnUsuario, obtenerUsuarios } from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validarUsuario";

const router = Router()

router.get("/usuarios",obtenerUsuarios)
router.get("/usuarios/:id",obtenerUnUsuario)
router.post("/usuarios",validarUsuario,crearUsuario)

export default router