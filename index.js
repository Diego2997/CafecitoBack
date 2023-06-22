import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

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
//rutas
