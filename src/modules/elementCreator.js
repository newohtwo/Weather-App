import dataController from './DataController';
import util from './Util';
import components from './Components';
import ui from './UI';

const elements = (() => {
  //appeand all the elements of the page into main
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
    main.appendChild(additionalStatsInit());
  }

  //create element of that shows city name
  function initCityNameP() {
    let element = document.createElement('p');
    element.id = 'city-name';
    element.textContent = dataController.getCityName();

    return element;
  }

  //current div - shows the temp as it is right now
  function initCurrent() {
    let element = document.createElement('div');
    element.id = 'current';
    currentAppendNodes(element);
    return element;
  }

  function currentAppendNodes(element) {
    let img = document.createElement('img');
    img.id = 'current-img';
    img.src = dataController.imgSwitch(dataController.getCWeatherSate());

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

  //creates the C/F sign above the degree
  //TODO create the onclick function that will switch betwen the methods of degree
  function degreeMethodDivBuild() {
    let degreeMethodDiv = document.createElement('div');
    degreeMethodDiv.id = 'degree-method';
    //childs of div
    let currentTempMethodP = document.createElement('p');
    currentTempMethodP.id = 'current-temp-method';

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
    components.initTempMethodBtn(degreeMethodDiv);
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

  // !- part of today low and high temperatures -!
  //craets the low and high temps below the current temp
  function initLowHighTemps() {
    let element = document.createElement('div');
    element.id = 'today-low-high';
    addLHTempsForToday(element);
    return element;
  }
  //appeands to elemnt the low and high temperatues for today
  function addLHTempsForToday(element) {
    element.appendChild(
      secondryTemps('temp-sign', 'L', 'today-low', dataController.getTodayLow())
    );
    element.appendChild(
      secondryTemps(
        'temp-sign',
        'H',
        'today-high',
        dataController.getTodayHigh()
      )
    );
  }

  //creates the div that shows secoundry data for today
  function secondryTemps(className, sign, id, textData) {
    let div = document.createElement('div');
    let spanNum = document.createElement('span');
    let spanSign = document.createElement('span');

    spanSign.classList = className;
    spanSign.textContent = sign;
    spanNum.id = id;
    spanNum.textContent = textData;

    div.appendChild(spanNum);
    div.appendChild(spanSign);

    return div;
  } // !- part of today low and high temperatures END -!

  //grid for the weekly weather data
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
    img.src = dataController.imgSwitch(day.weather[0].main);

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

  //!- addtional stats regarding the day -!
  //craetes the div that shows addiontal data about today
  function additionalStatsInit() {
    let element = document.createElement('div');
    element.id = `extra-stats`;

    element.appendChild(infoPElement());
    element.appendChild(gridExtraStats());
    return element;
  }

  //creates p element that will show static text
  function infoPElement() {
    let element = document.createElement('p');
    element.textContent = 'additional information:';
    element.id = 'p-info';
    return element;
  }

  //creates grid,adds to grid cells
  function gridExtraStats() {
    let element = document.createElement('div');
    element.id = `grid-container-ex`;

    let arr = extraCells();
    for (let index = 0; index < 6; index++) {
      element.appendChild(arr[index]);
    }
    return element;
  }

  //returns an array of cells for grid
  function extraCells() {
    let element = document.createElement('div');
    element.classList = `grid-cell-ex`;
    let cells = [];

    //data contains array of {name,data}
    let data = dataController.getExtraData();
    let size = data.length;

    let name, cellData;

    for (let index = 0; index < size; index++) {
      name = data[index].name;
      cellData = data[index].data;

      let cellDataArr = gridCellEx(name, cellData);
      cells.push(gridCellExAppendData(element, cellDataArr));
    }

    return cells;
  }

  //creates 2 p elements with data and returns array containing them
  //name of data
  //data
  function gridCellEx(name, data) {
    let arr = [];
    let pStatic = document.createElement('p');
    pStatic.classList = 'info';
    pStatic.textContent = name;

    let pData = document.createElement('p');
    pData.classList = 'ex-data';
    pData.id = `${name}-data`;
    pData.textContent = data;

    arr.push(pStatic);
    arr.push(pData);
    return arr;
  }

  //copies element and appends into it array of elements
  function gridCellExAppendData(element, arr) {
    let cpyE = element.cloneNode(true);
    let size = arr.length;
    for (let index = 0; index < size; index++) {
      cpyE.appendChild(arr[index]);
    }
    return cpyE;
  }
  //!- addtional stats regarding the day END -!

  return { initPageElements };
})();

export default elements;
