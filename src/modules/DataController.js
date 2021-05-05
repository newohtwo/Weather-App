//goal of module, save the data gotten from the api and use it for ui and other means

const DataController = (() => {
  let data;

  function setData(apiData) {
    data = apiData;
    console.log('in DATA');
    console.log(data);
  }

  return {
    setData,
  };
})();

export default DataController;
