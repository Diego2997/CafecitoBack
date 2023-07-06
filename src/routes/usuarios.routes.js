import { Router } from "express";
import { crearUsuario, login, obtenerUnUsuario, obtenerUsuarios } from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validarUsuario";

const router = Router()

router.get("/usuarios",obtenerUsuarios)
router.get("/usuarios/:id",obtenerUnUsuario)
router.post("/usuarios",validarUsuario,crearUsuario)
router.post("/usuarios/login",validarUsuario,login)

export default router