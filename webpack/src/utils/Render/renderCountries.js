import UI from "../UI";

const renderCountries = (data) => {
  data.map((item) => {
    const option = document.createElement("option");
    option.text = item.country;
    option.value = item.country;
    UI.countrySelect.add(option);
  });
};

export default renderCountries;
