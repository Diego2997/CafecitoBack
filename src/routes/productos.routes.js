import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProductos,
  obtenerUnProducto,
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router();

router.get("/productos", obtenerProductos);
router.get("/productos/:id", obtenerUnProducto);
router.post("/productos",validarProducto, crearProducto);
router.delete("/productos/:id", borrarProducto);
router.put("/productos/:id",validarProducto, editarProducto);

export default router;
