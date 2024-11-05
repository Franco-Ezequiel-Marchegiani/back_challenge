//Set a function to call him and send him the props to 
export const Get = async (req, res, url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error to get the data API', error);
      res.status(500).json({ error: 'Error to get the data API' });
    }
  };