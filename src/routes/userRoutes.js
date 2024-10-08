import { Router } from 'express';
import { registerUser } from '../controllers/userController.js'; // Importar controladores
import { homeController } from '../controllers/homeController.js';
import { getBreweries, getBreweriesByCity, getBreweriesByID, getCities } from '../controllers/breweryController.js';
import { loginUser } from '../controllers/loginUserController.js';
import { removeUser } from '../controllers/RemoveUserController.js';

const router = Router();

/* Rutas con Data de la API */

// Ruta principal
router.get('/', homeController);

// Ruta para obtener datos de la API de cervecerías
router.get('/breweries', getBreweries);

router.get('/breweries/:id', getBreweriesByID);

router.get('/breweries/city/:city', getBreweriesByCity);

router.get('/breweries/cities/list', getCities);


//Rutas de validación de usuario
router.post('/register', registerUser);

//Con esta ruta el usuario envía mail y pass, y se verifica si está ok
router.post('/login', loginUser);

router.post('/remove_user', removeUser);

export default router;