import fetch from 'node-fetch';

//En este controllador obtenemos la información de la API, el cual sería toda la info en listado.
export const getBreweries = async (req, res) => {
  try {
    const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
    const breweries = await response.json();
    res.json(breweries);
  } catch (error) {
    console.error('Error al obtener los datos de la API', error);
    res.status(500).json({ error: 'Error al obtener los datos de la API' });
  }
};

// AÑADIR ACÁ LOS OTROS EXPORT, PORQUE LA LÓGICA ES ESA Y ES SIMPLE