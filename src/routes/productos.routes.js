import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProductos,
} from "../controllers/productos.controllers";

const router = Router();

router.get("/productos", obtenerProductos);
router.post("/productos", crearProducto);
router.delete("/productos/:id", borrarProducto);
router.put("/productos/:id", editarProducto);

export default router;
