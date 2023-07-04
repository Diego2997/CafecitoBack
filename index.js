import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import 'dotenv/config'
import './src/database/dbConnection'
import productosRouter from './src/routes/productos.routes'
import usuariosRouter from './src/routes/usuarios.routes'

//Tomar un puerto
//crear una instancia de express
const app = express()
//crear una variable para guardar un puerto
app.set("port",process.env.PORT || 4000)
app.listen(app.get("port"),()=>{
    console.log("Estoy en el puerto " + app.get("port"))
})
//middlewares
app.use(cors())//permite conexiones remotas
app.use(express.json())//tomar del objeto request datos en formato json
app.use(morgan("dev"))

console.log(path.join(__dirname))
app.use(express.static(path.join(__dirname,"/public")))
//rutas
app.use('/api',productosRouter)
app.use('/api',usuariosRouter)
// app.get('/productos',(req,res)=>{
//     res.send('Esto fue una peticion get')
// })