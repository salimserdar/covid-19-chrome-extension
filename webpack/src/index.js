import "./styles.scss";
import $ from "jquery";
import select2 from "select2";
import UI from "./utils/UI";
import rederSelect2 from "./utils/Render/renderSelect2";
import renderWorld from "./utils/Render/renderWorld";
import renderCountries from "./utils/Render/renderCountries";
import countryInfo from "./utils/countryInfo";
import axios from "axios";

$(document).ready(function () {
  $("#country-select").select2();

  $("#country-select").on("select2:select", function (e) {
    const countryName = e.params.data.text;
    countryInfo(countryName);
  });
  
});
