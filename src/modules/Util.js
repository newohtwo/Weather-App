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

  return {
    dtToDay: convertDtToDay,
    dtToHMS: converDtToTime,
  };
})();

export default util;
