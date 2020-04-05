import axios from "axios";
import UI from "../UI/index";

const renderWorld = (() => {
  axios
    .get("https://corona.lmao.ninja/all")
    .then(function (response) {
      const data = response.data;
      UI.countryName.innerHTML = "World";
      UI.countryCases.innerHTML = data.cases;
      UI.countryTodayCases.innerHTML = data.todayCases;
      UI.countryDeaths.innerHTML = data.deaths;
      UI.countryTodayDeaths.innerHTML = data.todayDeaths;
      UI.countryRecovered.innerHTML = data.recovered;
      UI.countryFlag.style.backgroundImage =  `url("${data.countryInfo.flag}")`;
    })
    .catch(function (error) {
      console.log(error);
    });
})();

export default renderWorld;
