//create the logic for the components on the web, button , input
import DataController from './DataController';
import UI from './UI';

const copmonents = (() => {
  const searchBtn = initSBtn();
  const inputField = initInputField();
  let tempBtn;

  function initSBtn() {
    let element = document.querySelector('#search-btn');
    element.onclick = function () {
      //start the api search for the coordinats and than transform them into the needed data

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

  function initTempMethodBtn(element) {
    tempBtn = element;
    tempBtn.onclick = function () {
      UI.switchDegreeMethod();
    };
  }

  return {
    initTempMethodBtn,
  };
})();

export default copmonents;
