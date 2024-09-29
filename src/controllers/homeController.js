// src/controllers/homeController.js
import fetch from 'node-fetch';

export const homeController = async (req, res) => {
  try {
    const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
    const breweries = await response.json(); // Convertir a JSON los datos obtenidos
    
    // Enviar los datos como respuesta
    res.json(breweries);
  } catch (error) {
    // Manejar errores en la solicitud
    console.error('Error al obtener los datos de la API', error);
    res.status(500).json({ error: 'Error al obtener los datos de la API' });
  }
};