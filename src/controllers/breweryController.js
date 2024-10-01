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


//Info por ID   https://api.openbrewerydb.org/v1/breweries?by_city=

export const getBreweriesByID = async (req, res) => {
  console.log(req);

  const { id } = req.params
  console.log(id);
  
  try {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
    const breweries = await response.json();
    res.json(breweries);
  } catch (error) {
    console.error('Error al obtener los datos de la API', error);
    res.status(500).json({ error: 'Error al obtener los datos de la API' });
  }
};

export const getCities = async (req, res) => {
  try {
    
    const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
    const breweries = await response.json();
    
    const cities = breweries.map(brewery => brewery.city);
    
    const uniqueCities = [...new Set(cities)];
    console.log(uniqueCities);

    res.json({cities: uniqueCities});
    
  } catch (error) {
    console.error('Error al obtener los datos de la API', error);
    res.status(500).json({ error: 'Error al obtener los datos de la API' });
  }
};

export const getBreweriesByCity = async (req, res) => {
  const { city } = req.params
  try {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${city}`);
    const breweries = await response.json();
    res.json(breweries);
  } catch (error) {
    console.error('Error al obtener los datos de la API', error);
    res.status(500).json({ error: 'Error al obtener los datos de la API' });
  }
};

// AÑADIR ACÁ LOS OTROS EXPORT, PORQUE LA LÓGICA ES ESA Y ES SIMPLE