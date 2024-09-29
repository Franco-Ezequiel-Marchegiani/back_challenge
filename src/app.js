/* eslint-disable no-undef */
import dotenv from 'dotenv' //Importamos las variables de entorno
import express from 'express'
import userRoutes from './routes/userRoutes.js'

dotenv.config({ path: '../.env' });

const app = express();
//Establecemos el puerto
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/', userRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
