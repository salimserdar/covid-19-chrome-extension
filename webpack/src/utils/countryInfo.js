import renderData from "./Render/renderData";
import axios from "axios";

const countryInfo = (countryName) => {
  axios
    .get(`https://corona.lmao.ninja/countries/${countryName}`)
    .then(function (response) {
      const data = response.data;
      renderData(data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default countryInfo;
