import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  obtenerProductos,
} from "../controllers/productos.controllers";

const router = Router();

router.get("/productos", obtenerProductos);
router.post("/productos", crearProducto);
router.delete("/productos/:id", borrarProducto);

export default router;
