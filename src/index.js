//import tree from './assets/tree.jpeg';
import './css/style.css';
import './modules/Components';
import './modules/elementCreator';
import api from './modules/WeatherApi';
import dataController from './modules/DataController';

//initWebsite = call to api -> call to dataController -> call to elementCreator -> append it to page
//additional calls using the search = call to api -> call to data controller -> call to ui

//api.initApp();
//maybe create function that will start it all where it will simulate a buton press of search
//create a circle that shows loading , create it in element creator and than disable it from ui;
dataController.initDefualtData();
