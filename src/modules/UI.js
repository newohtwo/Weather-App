//modify the look of the website with the data changes
const UI = (() => {
  const currentCityName = document.querySelector('#city-name');
  const currentTemp = document.querySelector('#current-temp');
  const currentImg = document.querySelector('#current-img');

  function setCityName(name) {
    currentCityName.textContent = name;
  }

  function addElementToMain(element) {}
})();
