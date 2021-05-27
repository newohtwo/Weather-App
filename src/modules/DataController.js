//goal of module, save the data gotten from the api and use it for ui and other means
import cloud from '../assets/cloud.svg';
import thunderstorm from '../assets/storm.svg';
import drizzle from '../assets/cloudy_rain.svg';
import rain from '../assets/rain.svg';
import snow from '../assets/snow.svg';
import haze from '../assets/haze.svg';
import clear from '../assets/clear.svg';

import ui from './UI';
import api from './WeatherApi';
import elementCreator from './elementCreator';
import util from './Util';
const DataController = (() => {
  let today;
  let weekly;

  //fetch defualt data for web and transfer it to elementCreator
  async function initDefualtData() {
    ui.loadingSwitch();
    let data = await api.fetchWeather('rehovot');

    weekly = data.pop();
    today = data.pop();

    /*
    console.log('current');
    console.log(today);
    console.log(today.weather[0].main);
    console.log('weekly');
    console.log(weekly);
    */
    elementCreator.initPageElements();
    ui.loadingSwitch();
    //call element creator with current and weekly data.
    //elementCreator.init(weeklyW,currentDayW);
  }

  async function fetchDataUsingName(cityName) {
    let data = await api.fetchWeather(cityName);
    weekly = data.pop();
    today = data.pop();
    ui.updateUi();

    //UI change
  }

  /*
  getters for current day/ daily weather
  */

  function getCTemp() {
    return Math.round(today.main.temp);
  }

  function getCityName() {
    return today.name;
  }

  function getCWeatherSate() {
    return today.weather[0].main;
  }

  function getHumidityT() {
    return today.main.humidity;
  }

  function getFeelLikeCT() {
    return today.main.feels_like;
  }

  function getWindSpeed() {
    return today.wind.speed;
  }

  function getTodayHigh() {
    return Math.round(today.main.temp_max);
  }

  function getTodayLow() {
    return Math.round(today.main.temp_min);
  }

  function getWeeklyWeather() {
    return weekly.daily;
  }

  function imgSwitch(desc) {
    switch (desc) {
      case 'Clouds':
        return cloud;

      case 'Thunderstorm':
        return thunderstorm;

      case 'Drizzle':
        return drizzle;

      case 'Rain':
        return rain;

      case 'Snow':
        return snow;

      case 'Clear':
        return clear;

      default:
        return haze;
    }
  }

  function getExtraData() {
    return _extraBundle();
  }

  function _extraBundle() {
    let bundle = [];
    bundle.push(_getSunrise());
    bundle.push(_getSunSet());
    bundle.push(_getVisability());
    bundle.push(_getDescription());
    bundle.push(_getWindDegree());
    bundle.push(_getWindPressure());
    return bundle;
  }

  function additionalData() {
    let bundle = [];
    bundle.push(_getSunrise().data);
    bundle.push(_getSunSet().data);
    bundle.push(_getVisability().data);
    bundle.push(_getDescription().data);
    bundle.push(_getWindDegree().data);
    bundle.push(_getWindPressure().data);
    return bundle;
  }

  //sunrise
  //sunset
  //visability
  //description
  //wind degree
  //pressure

  //addtional data for the day
  function _getSunrise() {
    let time = util.dtToHMS(today.sys.sunrise);
    let obj = {
      name: 'sunrise',
      data: time,
    };
    return obj;
  }
  function _getSunSet() {
    let time = util.dtToHMS(today.sys.sunset);
    let obj = {
      name: 'sunset',
      data: time,
    };
    return obj;
  }
  function _getVisability() {
    let obj = {
      name: 'visibility',
      data: today.visibility,
    };

    return obj;
  }

  function _getDescription() {
    let obj = {
      name: 'description',
      data: today.weather[0].description,
    };
    return obj;
  }

  function _getWindDegree() {
    let obj = {
      name: 'windDegree',
      data: today.wind.deg,
    };
    return obj;
  }

  function _getWindPressure() {
    let obj = {
      name: 'windPressure',
      data: today.main.pressure,
    };
    return obj;
  }

  return {
    initDefualtData,
    fetchDataUsingName,
    imgSwitch,
    getCTemp,
    getCityName,
    getCWeatherSate,
    getFeelLikeCT,
    getHumidityT,
    getWindSpeed,
    getTodayHigh,
    getTodayLow,
    getWeeklyWeather,
    getExtraData,
    additionalData,
  };
})();

export default DataController;
