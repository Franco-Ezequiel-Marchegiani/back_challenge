/* eslint-disable no-undef */
import dotenv from 'dotenv' //Importamos las variables de entorno
import express from 'express'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config({ path: '../.env' });

const app = express();
app.use(cors())
//Establecemos el puerto
const port = process.env.PORT || 5056;

// Middleware
app.use(express.json());

// Rutas
app.use('/', userRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
