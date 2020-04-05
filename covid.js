(function() {
  fetch("https://corona.lmao.ninja/all")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderTotalData(data);
    });

  function renderTotalData(data) {
    const elemCases = document.getElementById("cases");

    console.log(elemCases);
    const vaka = '10';

    elemCases.innerHTML = data.cases;

    console.log(data.cases);
  }
})();
