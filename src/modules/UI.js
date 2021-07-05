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

  let degreeCelsius, degreeFahrenheit;
  let degreeMethodBool = false;

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

    degreeCelsius = document.querySelector('#celsius');
    degreeFahrenheit = document.querySelector('#fahrenheit');
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
    function resetDegreeMethod() {
      degreeMethodBool = false;
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

    if (loadingRing.style.display === '') {
      loadingRing.style.display = 'block';
    } else {
      loadingRing.style.display = '';
    }
  }

  //calls all the functions in the function array
  function changeUiFromCache() {
    let size = _changeUiArray.length;
    _initVariables();
    for (let index = 0; index < size; index++) {
      _changeUiArray[index]();
    }
    //disable load icon
    loadingIcon();
  }

  //change the current method of showing degrees on page.
  //needs to change it on click and than to keep the prefrence for next time use
  //can achive the save for the next time use using localstorage
  //TODO figure out a way to do it
  function switchDegreeMethod() {
    if (currentTemp == null) {
      _initVariables();
    }

    highLightDegreeChange();

    if (degreeMethodBool) {
      //change celcius
      currentTemp.textContent = Math.round(dataController.getCTemp());
      currentLowTemp.textContent = Math.round(dataController.getTodayLow());
      currentHighTemp.textContent = Math.round(dataController.getTodayHigh());

      currentFL.textContent = `feels like: ${dataController.getFeelLikeCT()}`;

      let gridNodes = weeklyWeatherGrid.children;
      let gridSize = gridNodes.length;
      for (let index = 0; index < gridSize; index++) {
        util.updateWeeklyGridTempMethod(
          gridNodes[index].children,
          index,
          degreeMethodBool
        );
      }
      degreeMethodBool = !degreeMethodBool;
    } else {
      //change to faranhigt
      currentTemp.textContent = util.celToFar(dataController.getCTemp());
      currentLowTemp.textContent = util.celToFar(dataController.getTodayLow());
      currentHighTemp.textContent = util.celToFar(
        dataController.getTodayHigh()
      );
      currentFL.textContent = `feels like: ${util.celToFar(
        dataController.getFeelLikeCT()
      )}`;

      let gridNodes = weeklyWeatherGrid.children;
      let gridSize = gridNodes.length;
      for (let index = 0; index < gridSize; index++) {
        util.updateWeeklyGridTempMethod(
          gridNodes[index].children,
          index,
          degreeMethodBool
        );
      }
      degreeMethodBool = !degreeMethodBool;
    }
  }

  function highLightDegreeChange() {
    if (degreeMethodBool) {
      degreeFahrenheit.style.fontWeight = 'bold';
      degreeCelsius.style.fontWeight = '50';
      degreeFahrenheit.style.color = 'gray';
      degreeCelsius.style.color = 'black';
    } else {
      degreeFahrenheit.style.fontWeight = '50';
      degreeCelsius.style.fontWeight = 'bold';
      degreeFahrenheit.style.color = 'black';
      degreeCelsius.style.color = 'gray';
    }
  }

  return {
    updateUi: changeUiFromCache,
    loadingSwitch: loadingIcon,
    switchDegreeMethod,
    _initVariables,
  };
})();

export default UI;
