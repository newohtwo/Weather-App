//goal of module, save the data gotten from the api and use it for ui and other means
import cloud from '../assets/cloud.svg';
import thunderstorm from '../assets/storm.svg';
import drizzle from '../assets/cloudy_rain.svg';
import rain from '../assets/rain.svg';
import snow from '../assets/snow.svg';
import haze from '../assets/haze.svg';

import ui from './UI';
import api from './WeatherApi';
import elementCreator from './elementCreator';
const DataController = (() => {
  let today;
  let weekly;

  //fetch defualt data for web and transfer it to elementCreator
  async function initDefualtData() {
    let data = await api.fetchWeather('london');

    weekly = data.pop();
    today = data.pop();
    console.log('current');
    console.log(today);
    console.log(today.weather[0].main);
    console.log('weekly');
    console.log(weekly);
    elementCreator.initPageElements(weekly, today);
    //call element creator with current and weekly data.
    //elementCreator.init(weeklyW,currentDayW);
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

  function getWeatherState() {
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

  function imgSwitch(desc) {
    switch (desc) {
      case 'Clouds':
        return cloud;
        break;

      case 'Thunderstorm':
        return thunderstorm;
        break;

      case 'Drizzle':
        return drizzle;
        break;

      case 'Rain':
        return rain;
        break;

      case 'Snow':
        return snow;
        break;

      default:
        return haze;
        break;
    }
  }

  return {
    initDefualtData,
    imgSwitch,
    getCTemp,
    getCityName,
    getWeatherState,
    getFeelLikeCT,
    getHumidityT,
    getWindSpeed,
    getTodayHigh,
    getTodayLow,
  };
})();

export default DataController;
