import UI from '../UI';

const renderData = (data) => {
  UI.countryName.innerHTML = data.country;
  UI.countryCases.innerHTML = data.cases;
  UI.countryTodayCases.innerHTML = data.todayCases;
  UI.countryDeaths.innerHTML = data.deaths;
  UI.countryTodayDeaths.innerHTML = data.todayDeaths;
  UI.countryRecovered.innerHTML = data.recovered;
  UI.countryFlag.style.backgroundImage =  `url("${data.countryInfo.flag}")`;
};


export default renderData;