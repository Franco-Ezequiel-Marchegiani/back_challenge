import { Get } from "./getController.js";


export const getCountry = async (req, res) => {
  const { countryCode } = req.params

  Get(req, res, `https://date.nager.at/api/v3/CountryInfo/${countryCode}`)
  
};

export const getCountryPopulation = async (req, res) => {

  Get(req, res, 'https://countriesnow.space/api/v0.1/countries/population/cities')

};

export const getCountryImage = async (req, res) => {
  Get(req, res, 'https://countriesnow.space/api/v0.1/countries/flag/images')
};
