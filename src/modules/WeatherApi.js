//get weather api and return it in readable data
//call the current weather api data, than get from it the long and alt, use it in the one call api for 7 days data
//before getting the data from the user make sure it is formated correctly.

//this api should get the city name and return the info regarding it
//get city output data

//create the 2 call thingy
import dataController from './DataController';
const api = (() => {
  //call the api using city name to get lon and alt data
  async function getCoordinates(cityName) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=658b8fa777dbd0b431e0120139bc7e13`,
        { mode: 'cors' }
      );
      if (response.status === 404) {
        throw 'couldnt find the city';
      }

      const data = await response.json();
      let lat = data.coord.lat;
      let lon = data.coord.lon;
      getWeeklyWeather(lat, lon);
    } catch (error) {
      console.log(
        error + ' ' + 'unexpected error while fetching for long and lat'
      );
    }
  }

  //using lat and lon data fetch a 7 week forcast
  async function getWeeklyWeather(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=658b8fa777dbd0b431e0120139bc7e13`,
        { mode: 'cors' }
      );
      console.log(response);
      if (response.status === 404) {
        console.log('couldnt find the city');
        return;
      }

      const data = await response.json();
      dataController.setData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  (function setDefualtCity() {
    // getCoordinates("london");
  })();
  return {
    searchCity: getCoordinates,
  };
})();

export default api;
