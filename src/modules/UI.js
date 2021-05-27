//modify the look of the website with the data changes
//change this module to be non self creating but after something happens

import dataController from './DataController';
import util from './Util';
const UI = (() => {
  let loadingRing = document.querySelector('.lds-ring');
  let currentCityName,
    currentTemp,
    currentImg,
    currentFL,
    currentH,
    currentWS,
    currentLowTemp,
    currentHighTemp,
    weeklyWeatherGrid,
    sunrise,
    sunset,
    visibility,
    description,
    windDegree,
    windPressure;

  function _initVariables() {
    currentCityName = document.querySelector('#city-name');
    currentTemp = document.querySelector('#current-temp');
    currentImg = document.querySelector('#current-img');
    currentFL = document.querySelector('#current-feel-like');
    currentH = document.querySelector('#current-humidity');
    currentWS = document.querySelector('#current-wind-speed');
    currentLowTemp = document.querySelector('#today-low');
    currentHighTemp = document.querySelector('#today-high');

    weeklyWeatherGrid = document.querySelector('#grid-container');

    sunrise = document.querySelector('#sunrise-data');
    sunset = document.querySelector('#sunset-data');
    visibility = document.querySelector('#visibility-data');
    description = document.querySelector('#description-data');
    windDegree = document.querySelector('#windDegree-data');
    windPressure = document.querySelector('#windPressure-data');
  }

  //function array for updating the website
  const _changeUiArray = [
    function cityNameFD() {
      //enable load icon
      loadingIcon();

      currentCityName.textContent = dataController.getCityName();
    },
    //current sets
    function currentTempFD() {
      currentTemp.textContent = dataController.getCTemp();
    },
    function currentImgFD() {
      currentImg.src = dataController.imgSwitch(
        dataController.getCWeatherSate()
      );
    },

    //feel like
    function currentFLFD() {
      currentFL.textContent = `feels like: ${dataController.getFeelLikeCT()}`;
    },
    //humidity
    function currentHFD() {
      currentH.textContent = `humidity: ${dataController.getHumidityT()}%`;
    },
    //windspeed
    function currentWSFD() {
      currentWS.textContent = `wind speed: ${dataController.getWindSpeed()} k/m`;
    },
    //todaylow
    function currentLTFD() {
      currentLowTemp.textContent = dataController.getTodayLow();
    },
    //today high
    function currentHTFD() {
      currentHighTemp.textContent = dataController.getTodayHigh();
    },
    //update the weekly grid layout to match the new city
    function weeklyGridUiUpdate() {
      let gridNodes = weeklyWeatherGrid.children;

      let gridSize = gridNodes.length;
      for (let index = 0; index < gridSize; index++) {
        util.updateWGNData(gridNodes[index].children, index);
      }
    },
    //changes the text of the addtional data section
    function additionalDayDataUpdate() {
      let extraData = dataController.additionalData();

      sunrise.textContent = extraData[0];
      sunset.textContent = extraData[1];
      visibility.textContent = extraData[2];
      description.textContent = extraData[3];
      windDegree.textContent = extraData[4];
      windPressure.textContent = extraData[5];
    },
  ];

  function loadingIcon() {
    //fix this after first run no work
    console.log(loadingRing.style.display);
    if (loadingRing.style.display === '') {
      loadingRing.style.display = 'block';
    } else {
      loadingRing.style.display = '';
    }

    console.log(loadingRing.style.display);
  }

  //calls all the functions in the function array
  function changeUiFromCache() {
    //do it with time

    let size = _changeUiArray.length;
    _initVariables();
    for (let index = 0; index < size; index++) {
      _changeUiArray[index]();
    }
    //disable load icon
    loadingIcon();
  }

  function addElementToMain(element) {}

  return {
    updateUi: changeUiFromCache,
    loadingSwitch: loadingIcon,
  };
})();

export default UI;
