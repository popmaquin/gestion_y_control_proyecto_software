//dotenv para manejar variables de entorno y mysql2 para interactuar con la Base de Datos.
import { createPool } from 'mysql2/promise'
import 'dotenv/config'

//Establece coneccion a la base de datos.(Usando variable de entorno)
export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

console.log("Conexion base de datos")
