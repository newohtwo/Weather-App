import DataController from './DataController';
import dataController from './DataController';
import util from './Util';

const elements = (() => {
  function initPageElements() {
    let element = document.createElement('div');
    element.id = 'main';

    appendAllElementsIntoMain(element);

    document.body.appendChild(element);
  }

  function appendAllElementsIntoMain(main) {
    main.appendChild(initCityNameP());
    main.appendChild(initCurrent());
    main.appendChild(initLowHighTemps());
    main.appendChild(initGridContainerWeekly());
  }

  function initCityNameP() {
    let element = document.createElement('p');
    element.id = 'city-name';
    element.textContent = dataController.getCityName();

    return element;
  }

  function initCurrent() {
    let element = document.createElement('div');
    element.id = 'current';
    currentAppendNodes(element);
    return element;
  }

  function currentAppendNodes(element) {
    let img = document.createElement('img');
    img.id = 'current-img';
    img.src = dataController.imgSwitch(dataController.getWeatherState());

    let currentTempP = document.createElement('p');
    currentTempP.textContent = dataController.getCTemp();
    currentTempP.id = 'current-temp';

    let method = degreeMethodDivBuild();
    let additional = currentAdditional();

    element.appendChild(img);
    element.appendChild(currentTempP);
    element.appendChild(method);
    element.appendChild(additional);
  }

  function degreeMethodDivBuild() {
    let degreeMethodDiv = document.createElement('div');
    degreeMethodDiv.id = 'degree-method';
    //childs of div
    let currentTempMethodP = document.createElement('p');
    currentTempMethodP.id = 'current-temp-method';
    //might be an issue here
    let celsiusSpan = document.createElement('span');
    celsiusSpan.id = 'celsius';
    celsiusSpan.innerHTML = `&#8451`;

    let divider = document.createElement('span');
    divider.textContent = '/';

    let fahrenheitSpan = document.createElement('span');
    fahrenheitSpan.id = 'fahrenheit';
    fahrenheitSpan.innerHTML = '&#8457';

    currentTempMethodP.appendChild(celsiusSpan);
    currentTempMethodP.appendChild(divider);
    currentTempMethodP.appendChild(fahrenheitSpan);
    //end childs

    degreeMethodDiv.appendChild(currentTempMethodP);
    return degreeMethodDiv;
  }

  //build the additional info that shows next to the degree
  function currentAdditional() {
    let element = document.createElement('div');
    element.id = 'current-additional';

    let feelLikeP = document.createElement('p');
    feelLikeP.id = 'current-feel-like';
    feelLikeP.textContent = `feels like: ${dataController.getFeelLikeCT()}`;
    let humidityP = document.createElement('p');
    humidityP.id = 'current-humidity';
    humidityP.textContent = `humidity: ${dataController.getHumidityT()}%`;
    let windSpeedP = document.createElement('p');
    windSpeedP.id = 'current-wind-speed';
    windSpeedP.textContent = `wind speed: ${dataController.getWindSpeed()} k/m`;

    element.appendChild(feelLikeP);
    element.appendChild(humidityP);
    element.appendChild(windSpeedP);
    return element;
  } //!- part of current END -!

  function initLowHighTemps() {
    let element = document.createElement('div');
    element.id = 'today-low-high';
    lowHighSeperator(element);
    return element;
  }

  // !- part of today low and high temperatures -!
  function lowHighSeperator(element) {
    let tempDiv = document.createElement('div');
    let tempDiv2 = document.createElement('div');

    let spanNum = document.createElement('span');
    let spanSign = document.createElement('span');

    spanSign.classList = 'temp-sign';
    spanSign.textContent = 'L';
    spanNum.id = 'today-low';
    spanNum.textContent = dataController.getTodayLow();

    tempDiv.appendChild(spanNum);
    tempDiv.appendChild(spanSign);

    let spanNum2 = document.createElement('span');
    let spanSign2 = document.createElement('span');

    spanSign2.classList = 'temp-sign';
    spanSign2.textContent = 'H';
    spanNum2.id = 'today-high';
    spanNum2.textContent = dataController.getTodayHigh();

    tempDiv2.appendChild(spanNum2);
    tempDiv2.appendChild(spanSign2);

    element.appendChild(tempDiv);
    element.appendChild(tempDiv2);
  } // !- part of today low and high temperatures END -!

  function initGridContainerWeekly() {
    let element = document.createElement('div');
    element.id = 'grid-container';
    appendWeeklyGridCells(element);
    return element;
  }

  //!- part of grid weekly -!
  //append grid cells into grid
  function appendWeeklyGridCells(element) {
    let weekWeatherArr = dataController.getWeeklyWeather();
    for (let index = 1; index < 8; index++) {
      element.appendChild(gridCell(weekWeatherArr[index]));
    }
  }

  //create new grid cell with the information gotten from api
  function gridCell(day) {
    let cell = document.createElement('div');
    cell.classList = 'grid-cell';

    let p = document.createElement('p');
    p.textContent = util.dtToDay(day.dt);
    let img = document.createElement('img');
    img.classList = 'cell-img';
    img.src = DataController.imgSwitch(day.weather[0].main);

    let div = document.createElement('div');
    div.classList = 'cell-temps';
    let spanLow = document.createElement('span');
    spanLow.classList = 'cell-low';
    spanLow.textContent = Math.round(day.temp.min);

    let spanDay = document.createElement('span');
    spanDay.classList = 'cell-avreage';
    spanDay.textContent = Math.round(day.temp.day);

    let spanMax = document.createElement('span');
    spanMax.classList = 'cell-high';
    spanMax.textContent = Math.round(day.temp.max);

    div.appendChild(spanLow);
    div.appendChild(spanDay);
    div.appendChild(spanMax);

    cell.appendChild(p);
    cell.appendChild(img);
    cell.appendChild(div);

    return cell;
  } //!- part of grid weekly END -!

  //TODO create the extra information section
  /*
  const cityNameP = initCityNameP();
  const current = initCurrent();
  const todayLH = initLowHighTemps();
  const gridWeeklyTemp = initGridContainerWeekly();
  const main = initMain();

  function initMain() {
    let element = document.createElement('div');
    element.id = 'main';

    element.appendChild(cityNameP);
    element.appendChild(current);

    document.body.appendChild(element);
    return element;
  }

  function initalizeElements(today, weekly) {
    //call here 2 functions that will help to init
    cityNameP.textContent = today.name;
    initCurrent(today);
  }

  function initCityNameP() {
    let element = document.createElement('p');
    element.id = 'city-name';

    return element;
  }
  //build the main information on top of screen
  function initCurrent(todayD) {
    let element = document.createElement('div');
    element.id = 'current';
    currentAppendNodes(element, todayD);
    return element;
  }

  function currentAppendNodes(element, data) {
    let img = document.createElement('img');
    img.id = 'current-img';
    //img.src = dataController.imgSWitch(data.weather[0].main);
    //img.src = dataController.imgSwitch(data.weather[0].main);

    let currentTempP = document.createElement('p');
    currentTempP.textContent = '';
    currentTempP.id = 'current-temp';

    let method = degreeMethodDivBuild();
    let additional = currentAdditional();

    element.appendChild(img);
    element.appendChild(currentTempP);
    element.appendChild(method);
    element.appendChild(additional);
  }

  //!- part of current -!
  //build the part that showes what kind of method is used to show the degree for the data
  function degreeMethodDivBuild() {
    let degreeMethodDiv = document.createElement('div');
    degreeMethodDiv.id = 'degree-method';
    //childs of div
    let currentTempMethodP = document.createElement('p');
    currentTempMethodP.id = 'current-temp-method';
    //might be an issue here
    let celsiusSpan = document.createElement('span');
    celsiusSpan.id = 'celsius';
    celsiusSpan.innerHTML = `&#8451`;

    let divider = document.createElement('span');
    divider.textContent = '/';

    let fahrenheitSpan = document.createElement('span');
    fahrenheitSpan.id = 'fahrenheit';
    fahrenheitSpan.innerHTML = '&#8457';

    //end childs

    degreeMethodDiv.appendChild(currentTempMethodP);
    degreeMethodDiv.appendChild(celsiusSpan);
    degreeMethodDiv.appendChild(divider);
    degreeMethodDiv.appendChild(fahrenheitSpan);
    return degreeMethodDiv;
  }

  //build the additional info that shows next to the degree
  function currentAdditional() {
    let element = document.createElement('div');
    element.id = 'current-additional';

    let feelLikeP = document.createElement('p');
    feelLikeP.id = 'current-feel-like';
    let humidityP = document.createElement('p');
    humidityP.id = 'current-humidity';
    let windSpeedP = document.createElement('p');
    windSpeedP.id = 'current-wind-speed';

    element.appendChild(feelLikeP);
    element.appendChild(humidityP);
    element.appendChild(windSpeedP);
    return element;
  } //!- part of current END -!

  function initLowHighTemps() {
    let element = document.createElement('div');
    element.id = 'today-low-high';
    lowHighSeperator(element);
    return element;
  }

  // !- part of today low and high temperatures -!
  function lowHighSeperator(element) {
    let tempDiv = document.createElement('div');
    let tempDiv2 = document.createElement('div');

    let spanNum = document.createElement('span');
    let spanSign = document.createElement('span');

    spanSign.classList = 'temp-sign';
    spanSign.textContent = 'L';
    spanNum.id = 'today-low';

    tempDiv.appendChild(spanNum);
    tempDiv.appendChild(spanSign);
    spanNum.id = 'today-high';
    spanSign.textContent = 'H';

    tempDiv2.appendChild(spanNum);
    tempDiv2.appendChild(spanSign);

    element.appendChild(tempDiv);
    element.appendChild(tempDiv2);
  } // !- part of today low and high temperatures END -!

  function initGridContainerWeekly() {
    let element = document.createElement('div');
    element.id = 'grid-container';
    appendWeeklyGridCells(element);
  }
  //!- part of grid weekly -!
  function appendWeeklyGridCells(element) {
    let cell = document.createElement('div');
    cell.classList = 'grid-cell';
    cellContent(cell);

    for (let index = 0; index < 8; index++) element.appendChild(cell);
  }

  function cellContent(cell) {
    let p = document.createElement('p');
    let img = document.createElement('img');
    img.classList = 'cell-img';

    let div = document.createElement('div');
    let spanLow = document.createElement('span');
    spanLow.classList = 'cell-low';
    let spanDay = document.createElement('span');
    spanDay.classList = 'cell-avreage';
    let spanMax = document.createElement('span');
    spanMax.classList = 'cell-high';

    div.appendChild(spanLow);
    div.appendChild(spanDay);
    div.appendChild(spanMax);

    cell.appendChild(p);
    cell.appendChild(img);
    cell.appendChild(div);
  } //!- part of grid weekly END -!
  */

  return { initPageElements };
})();

export default elements;
