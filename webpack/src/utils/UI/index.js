const UI = (() => {
    const countrySelect = document.getElementById("country-select");
    const countryName = document.querySelector(".covid-data__name");
    const countryCases = document.querySelector(".covid-data__cases");
    const countryTodayCases = document.querySelector(".covid-data__todaycases");
    const countryDeaths = document.querySelector(".covid-data__deaths");
    const countryTodayDeaths = document.querySelector(".covid-data__todaysdeaths");
    const countryRecovered = document.querySelector(".covid-data__recovered");
    const countryFlag = document.querySelector(".covid-data__flag");
  
    return {
      countrySelect,
      countryName,
      countryCases,
      countryTodayCases,
      countryDeaths,
      countryTodayDeaths,
      countryRecovered,
      countryFlag
    };
})();

export default UI;