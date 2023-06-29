import Producto from '../models/producto'

export const obtenerProductos = async(req,res) =>{
    try {
      const productos = await Producto.find()
      res.status(200).json(productos)  
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:"Error al buscar los productos"
        })
    }
}

export const crearProducto = async(req,res) =>{
    try {
       const productoNuevo = new Producto(req.body)
       await productoNuevo.save()
       res.status(201).json({
        mensaje:"Se creo el producto"
       })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje:error.message
        })
    }
}

export const borrarProducto = async(req,res) =>{
    try {
        console.log(req.params)
        await Producto.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje:"Producto eliminado correctamente"})
     } catch (error) {
         console.log(error)
         res.status(404).json({
             mensaje:"No se pudo eliminar el producto"
         })
     }
}