import axios from "axios";
import renderCountries from "./renderCountries";

const rederSelect2 = (() => {
  axios
    .get("https://corona.lmao.ninja/countries")
    .then(function (response) {
      const data = response.data;
      renderCountries(data);
    })
    .catch(function (error) {
      console.log(error);
    });
})();

export default rederSelect2;
