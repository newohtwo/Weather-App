//create the logic for the components on the web, button , input
import DataController from './DataController';
import api from './WeatherApi';
const copmonents = (() => {
  const searchBtn = initSBtn();
  const inputField = initInputField();

  function initSBtn() {
    let element = document.querySelector('#search-btn');
    element.onclick = function () {
      //start the api search for the coordinats and than transform them into the needed data
      console.log('input field value');
      console.log(inputField.value);
      if (inputField.value === '') {
        return;
      }
      DataController.fetchDataUsingName(inputField.value);
      inputField.value = '';
    };
    return element;
  }

  function initInputField() {
    let element = document.querySelector('#city-input-text');
    return element;
  }
})();

export default copmonents;
