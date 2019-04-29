import axios from "axios";
import config from "../config/env.js";

export const getLocationsByCompanyId = companyId => {
  return axios
    .get(`${config.apiURL}/companies/${companyId}/locations`)
    .then(res => {
      return res.data.locations;
    })
    .catch(err => console.log(err));
};

export const getDealsByCompanyIdAndLocationId = (companyId, locationId) => {
  axios
    .get(
      `${config.apiURL}/companies/${companyId}/deals?location_ids=${locationId}`
    )
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
};
