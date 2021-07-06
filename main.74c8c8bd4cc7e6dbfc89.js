/*! For license information please see main.74c8c8bd4cc7e6dbfc89.js.LICENSE.txt */
(()=>{"use strict";var e={809:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function c(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],i=0;i<e.length;i++){var a=e[i],d=t.base?a[0]+t.base:a[0],l=n[d]||0,u="".concat(d," ").concat(l);n[d]=l+1;var s=c(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==s?(o[s].references++,o[s].updater(p)):o.push({identifier:u,updater:g(p,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,s=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,f=0;function g(e,t){var n,r,i;if(t.singleton){var a=f++;n=h||(h=l(t)),r=p.bind(null,n,a,!1),i=p.bind(null,n,a,!0)}else n=l(t),r=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=c(n[r]);o[i].references--}for(var a=d(e,t),l=0;l<n.length;l++){var u=c(n[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=a}}}},618:(e,t,n)=>{e.exports=n.p+"images/clear7d1e1b016f7767ec4879.svg"},221:(e,t,n)=>{e.exports=n.p+"images/cloudfcffee55e402cb7018de.svg"},910:(e,t,n)=>{e.exports=n.p+"images/cloudy_rain767428d26a7f274bcb7a.svg"},394:(e,t,n)=>{e.exports=n.p+"images/haze2711b0a964d14aa09dbb.svg"},362:(e,t,n)=>{e.exports=n.p+"images/rain60e1a9cf93050a14261b.svg"},74:(e,t,n)=>{e.exports=n.p+"images/snow0e9bf7c04b7acecd85ee.svg"},677:(e,t,n)=>{e.exports=n.p+"images/storm3c861808608a8d8ef664.svg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(809),i={insert:"head",singleton:!1};t()(r.Z,i);r.Z.locals;var a=n(221),o=n(677),c=n(910),d=n(362),l=n(74),u=n(394),s=n(618);const p=(()=>{function e(e){return e*=1.8,e+=32,Math.round(e)}return{dtToDay:function(e){return function(e){switch(e){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return 0}}(new Date(1e3*e).getDay())},dtToHMS:function(e){let t=new Date(1e3*e);return`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`},updateWGNData:function(e,t){let n=y.getWeeklyWeather();e[0].textContent=p.dtToDay(n[t].dt),e[1].src=y.imgSwitch(n[t].weather[0].main),function(e,t){let n=e.children[0],r=e.children[1],i=e.children[2];n.innerHTML=`${Math.round(t.temp.min)}`,r.innerHTML=`${Math.round(t.temp.day)}`,i.innerHTML=`${Math.round(t.temp.max)}`}(e[2],n[t])},celToFar:e,updateWeeklyGridTempMethod:function(t,n,r){let i=y.getWeeklyWeather();!function(t,n,r){let i=t.children[0],a=t.children[1],o=t.children[2];r?(i.innerHTML=`${Math.round(n.temp.min)}`,a.innerHTML=`${Math.round(n.temp.day)}`,o.innerHTML=`${Math.round(n.temp.max)}`):(i.innerHTML=`${Math.round(e(n.temp.min))}`,a.innerHTML=`${Math.round(e(n.temp.day))}`,o.innerHTML=`${Math.round(e(n.temp.max))}`)}(t[2],i[n],r)}}})(),m=p,h=(()=>{let e,t,n,r,i,a,o,c,d,l,u,s,p,h,f,g,C,v=document.querySelector(".lds-ring"),w=!1;function x(){e=document.querySelector("#city-name"),t=document.querySelector("#current-temp"),n=document.querySelector("#current-img"),r=document.querySelector("#current-feel-like"),i=document.querySelector("#current-humidity"),a=document.querySelector("#current-wind-speed"),o=document.querySelector("#today-low"),c=document.querySelector("#today-high"),d=document.querySelector("#grid-container"),l=document.querySelector("#sunrise-data"),u=document.querySelector("#sunset-data"),s=document.querySelector("#visibility-data"),p=document.querySelector("#description-data"),h=document.querySelector("#windDegree-data"),f=document.querySelector("#windPressure-data"),g=document.querySelector("#celsius"),C=document.querySelector("#fahrenheit")}const T=[function(){b(),e.textContent=y.getCityName()},function(){t.textContent=y.getCTemp()},function(){n.src=y.imgSwitch(y.getCWeatherSate())},function(){w=!1,C.style.fontWeight="bold",g.style.fontWeight="50",C.style.color="gray",g.style.color="black",console.log("here")},function(){r.textContent=`feels like: ${y.getFeelLikeCT()}`},function(){i.textContent=`humidity: ${y.getHumidityT()}%`},function(){a.textContent=`wind speed: ${y.getWindSpeed()} k/m`},function(){o.textContent=y.getTodayLow()},function(){c.textContent=y.getTodayHigh()},function(){let e=d.children,t=e.length;for(let n=0;n<t;n++)m.updateWGNData(e[n].children,n)},function(){let e=y.additionalData();l.textContent=e[0],u.textContent=e[1],s.textContent=e[2],p.textContent=e[3],h.textContent=e[4],f.textContent=e[5]}];function b(){""===v.style.display?v.style.display="block":v.style.display=""}return{updateUi:function(){let e=T.length;x();for(let t=0;t<e;t++)T[t]();b()},loadingSwitch:b,switchDegreeMethod:function(){if(null==t&&x(),w?(C.style.fontWeight="bold",g.style.fontWeight="50",C.style.color="gray",g.style.color="black"):(C.style.fontWeight="50",g.style.fontWeight="bold",C.style.color="black",g.style.color="gray"),w){t.textContent=Math.round(y.getCTemp()),o.textContent=Math.round(y.getTodayLow()),c.textContent=Math.round(y.getTodayHigh()),r.textContent=`feels like: ${y.getFeelLikeCT()}`;let e=d.children,n=e.length;for(let t=0;t<n;t++)m.updateWeeklyGridTempMethod(e[t].children,t,w);w=!w}else{t.textContent=m.celToFar(y.getCTemp()),o.textContent=m.celToFar(y.getTodayLow()),c.textContent=m.celToFar(y.getTodayHigh()),r.textContent=`feels like: ${m.celToFar(y.getFeelLikeCT())}`;let e=d.children,n=e.length;for(let t=0;t<n;t++)m.updateWeeklyGridTempMethod(e[t].children,t,w);w=!w}},_initVariables:x}})(),f={fetchWeather:async function(e){try{let t=[];const n=await async function(e){try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=658b8fa777dbd0b431e0120139bc7e13`,{mode:"cors"});if(404===t.status)throw"couldnt find the city";return await t.json()}catch(e){console.log(e+" unexpected error while fetching for long and lat")}}(e);let r=n.coord.lat,i=n.coord.lon;const a=await async function(e,t){try{const n=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${t}&exclude=minutely,hourly&units=metric&appid=658b8fa777dbd0b431e0120139bc7e13`,{mode:"cors"});return 404===n.status?void console.log("couldnt find the city"):await n.json()}catch(e){console.log(e)}}(r,i);return t.push(n),t.push(a),t}catch(e){console.log(e)}}},g=(()=>{function e(e,t,n,r){let i=document.createElement("div"),a=document.createElement("span"),o=document.createElement("span");return o.classList=e,o.textContent=t,a.id=n,a.textContent=r,i.appendChild(a),i.appendChild(o),i}function t(e){let t=document.createElement("div");t.classList="grid-cell";let n=document.createElement("p");n.textContent=m.dtToDay(e.dt);let r=document.createElement("img");r.classList="cell-img",r.src=y.imgSwitch(e.weather[0].main);let i=document.createElement("div");i.classList="cell-temps";let a=document.createElement("span");a.classList="cell-low",a.textContent=Math.round(e.temp.min);let o=document.createElement("span");o.classList="cell-avreage",o.textContent=Math.round(e.temp.day);let c=document.createElement("span");return c.classList="cell-high",c.textContent=Math.round(e.temp.max),i.appendChild(a),i.appendChild(o),i.appendChild(c),t.appendChild(n),t.appendChild(r),t.appendChild(i),t}function n(e,t){let n=[],r=document.createElement("p");r.classList="info",r.textContent=e;let i=document.createElement("p");return i.classList="ex-data",i.id=`${e}-data`,i.textContent=t,n.push(r),n.push(i),n}function r(e,t){let n=e.cloneNode(!0),r=t.length;for(let e=0;e<r;e++)n.appendChild(t[e]);return n}return{initPageElements:function(){let i=document.createElement("div");var a;i.id="main",(a=i).appendChild(function(){let e=document.createElement("p");return e.id="city-name",e.textContent=y.getCityName(),e}()),a.appendChild(function(){let e=document.createElement("div");return e.id="current",function(e){let t=document.createElement("img");t.id="current-img",t.src=y.imgSwitch(y.getCWeatherSate());let n=document.createElement("p");n.textContent=y.getCTemp(),n.id="current-temp";let r=function(){let e=document.createElement("div");e.id="degree-method";let t=document.createElement("p");t.id="current-temp-method";let n=document.createElement("span");n.id="celsius",n.innerHTML="&#8451";let r=document.createElement("span");r.textContent="/";let i=document.createElement("span");return i.id="fahrenheit",i.innerHTML="&#8457",t.appendChild(n),t.appendChild(r),t.appendChild(i),e.appendChild(t),C.initTempMethodBtn(e),e}(),i=function(){let e=document.createElement("div");e.id="current-additional";let t=document.createElement("p");t.id="current-feel-like",t.textContent=`feels like: ${y.getFeelLikeCT()}`;let n=document.createElement("p");n.id="current-humidity",n.textContent=`humidity: ${y.getHumidityT()}%`;let r=document.createElement("p");return r.id="current-wind-speed",r.textContent=`wind speed: ${y.getWindSpeed()} k/m`,e.appendChild(t),e.appendChild(n),e.appendChild(r),e}();e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(i)}(e),e}()),a.appendChild(function(){let t=document.createElement("div");return t.id="today-low-high",function(t){t.appendChild(e("temp-sign","L","today-low",y.getTodayLow())),t.appendChild(e("temp-sign","H","today-high",y.getTodayHigh()))}(t),t}()),a.appendChild(function(){let e=document.createElement("div");return e.id="grid-container",function(e){let n=y.getWeeklyWeather();for(let r=1;r<8;r++)e.appendChild(t(n[r]))}(e),e}()),a.appendChild(function(){let e=document.createElement("div");return e.id="extra-stats",e.appendChild(function(){let e=document.createElement("p");return e.textContent="additional information:",e.id="p-info",e}()),e.appendChild(function(){let e=document.createElement("div");e.id="grid-container-ex";let t=function(){let e=document.createElement("div");e.classList="grid-cell-ex";let t,i,a=[],o=y.getExtraData(),c=o.length;for(let d=0;d<c;d++){t=o[d].name,i=o[d].data;let c=n(t,i);a.push(r(e,c))}return a}();for(let n=0;n<6;n++)e.appendChild(t[n]);return e}()),e}()),document.body.appendChild(i)}}})(),y=(()=>{let e,t;function n(){return{name:"sunrise",data:m.dtToHMS(e.sys.sunrise)}}function r(){return{name:"sunset",data:m.dtToHMS(e.sys.sunset)}}function i(){return{name:"visibility",data:e.visibility}}function p(){return{name:"description",data:e.weather[0].description}}function y(){return{name:"windDegree",data:e.wind.deg}}function C(){return{name:"windPressure",data:e.main.pressure}}return{initDefualtData:async function(){h.loadingSwitch();let n=await f.fetchWeather("rehovot");t=n.pop(),e=n.pop(),g.initPageElements(),h.loadingSwitch()},fetchDataUsingName:async function(n){let r=await f.fetchWeather(n);t=r.pop(),e=r.pop(),h.updateUi()},imgSwitch:function(e){switch(e){case"Clouds":return a;case"Thunderstorm":return o;case"Drizzle":return c;case"Rain":return d;case"Snow":return l;case"Clear":return s;default:return u}},getCTemp:function(){return Math.round(e.main.temp)},getCityName:function(){return e.name},getCWeatherSate:function(){return e.weather[0].main},getFeelLikeCT:function(){return e.main.feels_like},getHumidityT:function(){return e.main.humidity},getWindSpeed:function(){return e.wind.speed},getTodayHigh:function(){return Math.round(e.main.temp_max)},getTodayLow:function(){return Math.round(e.main.temp_min)},getWeeklyWeather:function(){return t.daily},getExtraData:function(){return function(){let e=[];return e.push(n()),e.push(r()),e.push(i()),e.push(p()),e.push(y()),e.push(C()),e}()},additionalData:function(){let e=[];return e.push(n().data),e.push(r().data),e.push(i().data),e.push(p().data),e.push(y().data),e.push(C().data),e}}})(),C=(()=>{!function(){let t=document.querySelector("#search-btn");t.onclick=function(){""!==e.value&&(y.fetchDataUsingName(e.value),e.value="")}}();const e=document.querySelector("#city-input-text");let t;return{initTempMethodBtn:function(e){t=e,t.onclick=function(){h.switchDegreeMethod()}}}})();y.initDefualtData()})()})();