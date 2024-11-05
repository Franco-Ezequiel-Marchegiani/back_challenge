//import { FunctionGet } from "./countriesController";
import { Get } from "./getController.js";

export const homeController = async (req, res) => {
  
  //FunctionGet(req, res, 'https://date.nager.at/api/v3/AvailableCountries')
  Get(req, res, 'https://date.nager.at/api/v3/AvailableCountries')
};