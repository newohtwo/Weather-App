//modify the look of the website with the data changes
import dataController from './DataController';
const UI = (() => {
  const currentCityName = document.querySelector('#city-name');
  const currentTemp = document.querySelector('#current-temp');
  const currentImg = document.querySelector('#current-img');
  const currentFL = document.querySelector('#current-feel-like');
  const currentH = document.querySelector('#current-humidity');
  const currentWS = document.querySelector('#current-wind-speed');

  function changeCurrentCityData() {}

  function setCityName() {
    currentCityName.textContent = dataController.getCityName();
  }

  //current sets
  function setCurrentTemp() {
    currentTemp.textContent = dataController.getCTemp();
  }
  function setCurrentImg() {
    currentImg.src = dataController.imgSwitch(dataController.getWeatherState());
  }

  function setCurrentFeelLike() {}
  function setCurrentHumidity() {}
  function setCurrentWindSpeed() {}

  function setLowCurrentTemp() {}

  function setHighCurrentTemp() {}

  function addElementToMain(element) {}
})();
