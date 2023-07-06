import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarUsuario = [
    check("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre de usuario es requerido")
    .isString()
    .withMessage("El nombre de usuario debe ser una cadena de texto")
    .isLength({max:16,min:2})
    .withMessage("El nombre de usuario debe contener entre 2 y 16 caracteres"),

    check("contrasenia")
    .notEmpty()
    .withMessage("La contraseña es requerida")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,16}$/)
    .withMessage("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un carácter especial y un número. Además, la longitud máxima es de 16 caracteres."),
    
    check("email")
    .notEmpty()
    .withMessage("El campo email es requerido")
    .isEmail()
    .withMessage("El email no es valido"),
    (req,res,next)=>resultadoValidacion(req,res,next)
]

export default validarUsuario