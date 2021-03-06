import DataController from './DataController';

const util = (() => {
  function convertDtToDay(dt) {
    let date = new Date(dt * 1000);
    return _numToDayOfWeek(date.getDay());
  }
  function _numToDayOfWeek(num) {
    switch (num) {
      case 0:
        return 'Sunday';
        break;
      case 1:
        return 'Monday';
        break;
      case 2:
        return 'Tuesday';
        break;
      case 3:
        return 'Wednesday';
        break;
      case 4:
        return 'Thursday';
        break;
      case 5:
        return 'Friday';
        break;
      case 6:
        return 'Saturday';
        break;
      default:
        return 0;
    }
  }

  function converDtToTime(dt) {
    let date = new Date(dt * 1000);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  //get a node and change its properties using the new data we got from api
  //weekly grid Node
  function updateWGNData(node, index) {
    let weeklyArray = DataController.getWeeklyWeather();

    let p = node[0];
    p.textContent = util.dtToDay(weeklyArray[index].dt);

    let img = node[1];
    img.src = DataController.imgSwitch(weeklyArray[index].weather[0].main);

    let div = node[2];
    updateMinMaxAvreage(div, weeklyArray[index]);
  }
  //update the min avreage and max of a given day in a week
  function updateMinMaxAvreage(node, day) {
    let min = node.children[0];
    let avreage = node.children[1];
    let max = node.children[2];

    min.innerHTML = `${Math.round(day.temp.min)}`;
    avreage.innerHTML = `${Math.round(day.temp.day)}`;
    max.innerHTML = `${Math.round(day.temp.max)}`;
  }
  //Math.round(day.temp.min);

  //swap the weekly nodes temp method with the right temp messurment
  function swapTempMethod(node, index, tempMethod) {
    let weeklyArray = DataController.getWeeklyWeather();
    let div = node[2];
    updateTempMethod(div, weeklyArray[index], tempMethod);
  }

  //update the temp in each node
  function updateTempMethod(node, day, flag) {
    let min = node.children[0];
    let avreage = node.children[1];
    let max = node.children[2];

    //do the math here using the data
    if (flag) {
      min.innerHTML = `${Math.round(day.temp.min)}`;
      avreage.innerHTML = `${Math.round(day.temp.day)}`;
      max.innerHTML = `${Math.round(day.temp.max)}`;
    } else {
      min.innerHTML = `${Math.round(numToFahrenheit(day.temp.min))}`;
      avreage.innerHTML = `${Math.round(numToFahrenheit(day.temp.day))}`;
      max.innerHTML = `${Math.round(numToFahrenheit(day.temp.max))}`;
    }
  }

  function numToFahrenheit(num) {
    num *= 9 / 5;
    num += 32;
    return Math.round(num);
  }

  return {
    dtToDay: convertDtToDay,
    dtToHMS: converDtToTime,
    updateWGNData,
    celToFar: numToFahrenheit,
    updateWeeklyGridTempMethod: swapTempMethod,
  };
})();

export default util;
