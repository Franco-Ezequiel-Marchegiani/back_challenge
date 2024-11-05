import { Router } from 'express';
import { homeController } from '../controllers/homeController.js';
import {  getCountry, getCountryImage, getCountryPopulation,  } from '../controllers/countriesController.js';

const router = Router();

/* Rutas con Data de la API */

// Ruta principal
router.get('/', homeController);

// Ruta para obtener datos de la API de cervecerías

router.get('/country/:countryCode', getCountry);
router.get('/countries/population', getCountryPopulation );
router.get('/countries/flags', getCountryImage );




export default router;