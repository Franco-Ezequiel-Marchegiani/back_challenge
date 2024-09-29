import { Router } from 'express';
import { registerUser } from '../controllers/userController.js'; // Importar controladores
import { homeController } from '../controllers/homeController.js';
import { getBreweries } from '../controllers/breweryController.js';
import { loginUser } from '../controllers/loginUserController.js';

const router = Router();

/* Rutas con Data de la API */

// Ruta principal
router.get('/', homeController);

// Ruta para obtener datos de la API de cervecerías
router.get('/breweries', getBreweries);


//Rutas de validación de usuario
router.post('/register', registerUser);

//Con esta ruta el usuario envía mail y pass, y se verifica si está ok
router.post('/login', loginUser);

export default router;