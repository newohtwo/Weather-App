const elements = (() => {
  const main = initMain();
  const cityNameP = initCityNameP();
  const current = initCurrent();
  const todayLH = initLowHighTemps();
  const gridWeeklyTemp = initGridContainerWeekly();

  function initMain() {
    let element = document.createElement('div');
    element.id = 'main';
    return element;
  }

  function initCityNameP() {
    let element = document.createElement('p');
    element.textContent = '';
    return element;
  }
  //build the main information on top of screen
  function initCurrent() {
    let element = document.createElement('div');
    element.id = 'current';
    document.createElement();
    currentAppendNodes(element);
    return element;
  }

  function currentAppendNodes(element) {
    let img = document.createElement('img');
    img.id = 'current-img';

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
})();
