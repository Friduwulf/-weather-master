var cityInput = document.getElementById("cityInput");
var cityButton = document.getElementById("cityButton");
var pastWeather = document.getElementById("pastWeather");
var pastWeatherList = document.getElementById("pastWeatherList");
var cityName = document.getElementById("cityName");
var currentTemp = document.getElementById("currentTemp");
var currentHumidity = document.getElementById("currentHumidity");
var currentWind = document.getElementById("currentWind");
var today = dayjs().format("MM/DD/YYYY");
//Event listener for the search button
cityButton.addEventListener("click", function() {
    console.log("button clicked");
    console.log(cityInput.value);
    newFetch(cityInput.value)
});


//Fetch Request From API, Returns JSON of Weather for City
function newFetch() {
    var city = cityInput.value;
    var fetchUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=7bc997af78bb3b756c33e6116271beb0&units=metric&exclude=hourly";
    console.log(fetchUrl)
    fetch(fetchUrl)
        .then(function(response) {
        return response.json();
      })
        .then (function(data) {
            console.log(data);
            console.log("temp: " + data.list[0].main.temp.toFixed(2) + "°F");

            //Today's Weather
            cityName.innerHTML = cityInput.value + ` ${today}`;
            var icon = data.list[0].weather[0].icon;
            document.getElementById("weatherIcon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            currentTemp.innerHTML = 'Temp: ' + (data.list[0].main.temp) + '°C';
            currentWind.innerHTML = 'Wind: ' + (data.list[0].wind.speed) + 'KPH';
            currentHumidity.innerHTML = 'Humidity: ' + (data.list[0].main.humidity) + '%';

            //Tomorrow's Weather
            $('#2date').text(dayjs.unix(data.list[7].dt).format("MM/DD/YYYY"));
            var icon2 = data.list[7].weather[0].icon;
            document.getElementById("2weatherIcon").src = "https://openweathermap.org/img/wn/" + icon2 + "@2x.png";
            $('#2Temp').text('Temp: ' + data.list[7].main.temp.toFixed(2) + '°C');
            $('#2Humidity').text('Humidity: ' + data.list[7].main.humidity + '%'); 
            $('#2Wind').text('Wind: ' + data.list[7].wind.speed + 'KPH');

            //2Day Weather
            $('#3date').text(dayjs.unix(data.list[15].dt).format("MM/DD/YYYY"));
            var icon3 = data.list[15].weather[0].icon;
            document.getElementById("3weatherIcon").src = "https://openweathermap.org/img/wn/" + icon3 + "@2x.png";
            $('#3Temp').text('Temp: ' + data.list[15].main.temp.toFixed(2) + '°C');
            $('#3Humidity').text('Humidity: ' + data.list[15].main.humidity + '%'); 
            $('#3Wind').text('Wind: ' + data.list[15].wind.speed + 'KPH');

            //3Day Weather
            $('#4date').text(dayjs.unix(data.list[23].dt).format("MM/DD/YYYY"));
            var icon4 = data.list[23].weather[0].icon;
            document.getElementById("4weatherIcon").src = "https://openweathermap.org/img/wn/" + icon4 + "@2x.png";
            $('#4Temp').text('Temp: ' + data.list[23].main.temp.toFixed(2) + '°C');
            $('#4Humidity').text('Humidity: ' + data.list[23].main.humidity + '%'); 
            $('#4Wind').text('Wind: ' + data.list[23].wind.speed + 'KPH');

            //4Day Weather
            $('#5date').text(dayjs.unix(data.list[31].dt).format("MM/DD/YYYY"));
            var icon5 = data.list[31].weather[0].icon;
            document.getElementById("5weatherIcon").src = "https://openweathermap.org/img/wn/" + icon5 + "@2x.png";
            $('#5Temp').text('Temp: ' + data.list[31].main.temp.toFixed(2) + '°C');
            $('#5Humidity').text('Humidity: ' + data.list[31].main.humidity + '%'); 
            $('#5Wind').text('Wind: ' + data.list[31].wind.speed + 'KPH');

            //5Day Weather
            $('#6date').text(dayjs.unix(data.list[39].dt).format("MM/DD/YYYY"));
            var icon6 = data.list[39].weather[0].icon;
            document.getElementById("6weatherIcon").src = "https://openweathermap.org/img/wn/" + icon6 + "@2x.png";
            $('#6Temp').text('Temp: ' + data.list[39].main.temp.toFixed(2) + '°C');
            $('#6Humidity').text('Humidity: ' + data.list[39].main.humidity + '%'); 
            $('#6Wind').text('Wind: ' + data.list[39].wind.speed + 'KPH');
        })
}
//         .then(function(res) {
//             console.log(res.json());
//             if(!res.ok) {
//                 throw res.json();
//             }
//             return res.json();
//         })
//         .then(function(data) {
//             console.log(data);
//             getWeatherData(data);
//         })
//         .catch(function() {
//             cityInput.value = "";
//             alert("Please enter a valid city");
//         });
//         saveCity();
// }

// function saveCity() {
//     if (Object.values(localStorage).includes(cityInput)) {
//         return;
//     } else if (cityInput === "null") {
//         alert("Please Enter A City");
//         return;
//     } else {
//         var city = cityInput.value;
//         var idSetter = Object.keys(localStorage).length+1;
//         localStorage.setItem(idSetter, city);
//     }
// }

// function storeData(storeData) {
//     if (storeData == cityInput.value) {
//         var city = cityInput.value;
//     } else {
//         var city = storeData;
//     }
//     var idSetter = Object.keys(localStorage).length+1;
//     localStorage.setItem(idSetter, city);
//     var newPrevSearch = document.createElement("button");
//     newPrevSearch.setAttribute("id", city);
//     newPrevSearch.setAttribute("class", "prevSearch btn");
//     newPrevSearch.innerHTML = city;

//     if (!pastWeatherList.querySelector(city)) 
//        pastWeatherList.appendChild(newPrevSearch);
//        newPrevSearch.addEventListener("click", function(event) {
//         newFetch(event.target.id); 
//     })
//     console.log(city);
// }

// function createPrevSearch(storeData) {
//     var idSetter = Object.keys(localStorage).length+1;
//     localStorage.setItem(idSetter, city);
//     var newPrevSearch = document.createElement("button");
//     newPrevSearch.setAttribute("id", city);
//     newPrevSearch.setAttribute("class", "prevSearch btn");
//     newPrevSearch.innerHTML = city;

//     if (!pastWeatherList.querySelector(city)) 
//        pastWeatherList.appendChild(newPrevSearch);
//        newPrevSearch.addEventListener("click", function(event) {
//         newFetch(event.target.id); 
//     })
// }

// function getPastWeather() {
//     if (localStorage) {
//         var keys = Object.keys(localStorage);
//         var i = keys.length;

//         while (i--) {
//             if(localStorage.getItem(keys[i]) != "") {
//                 var data = (localStorage.getItem(keys[i]));
//                 // storeData(data);
//                 createPrevSearch(data);
//             }
//         }
//         pastWeatherList.addEventListener("click", function() {
//             if (!pastWeatherList.querySelector(`${cityInput.value}`))
//             pastWeather.append(pastWeatherButton);
//         });
//     }
// };

// function getWeatherData(storeData) {
//     pastWeather.innerHTML = "";
//     newFetch(storeData);
//     localStorage.clear();
// };

// function forcast (weekForcast) {
//     var currentEl = document.getElementById("current");
//     var currentTitleEl = document.createElement("h3");
//     var currentWeather = document.createElement("article");
//     var weekTitleEl = document.createElement("h3");
//     var forcastWeather = document.createElement("article");
//     currentTitleEl.innerHTML = "";
//     currentEl.innerHTML = "";
//     currentWeather.setAttribute("class", "todayforcast");
//     currentTitleEl.innerHTML = (weekForcast.city.name + ", " + weekForcast.city.country);
//     currentWeather.innerHTML = (`<img src= https://openweathermap.org/img/wn/${weekForecast.list[i].weather[0].icon 
//         + "@2x.png"} ></img>` 
//         + "<br>Day/Time: " 
//         + weekForecast.list[i].dt_txt 
//         + "<br> Temp: " 
//         + weekForecast.list[i].main.temp 
//         + "<br> Wind speed: " 
//         + weekForecast.list[i].wind.speed)
//     currentEl.appendChild(currentTitleEl);
//     currentEl.appendChild(currentWeather);
//     pastWeather.innerHTML = "";
//     weekTitleEl.innerHTML = "Weekly Weather Brief: ";
//     pastWeather.appendChild(weekTitleEl);
//     for (var i = 0; i < weekForcast.list.length; i + 8) {
//         forcastWeather.setAttribute("class", "forcast");
//         forcastWeather.innerHTML = (`<img src= https://openweathermap.org/img/wn/${weekForecast.list[i].weather[0].icon 
//             + "@2x.png"} ></img>` 
//             + "<br>Day/Time: " 
//             + weekForecast.list[i].dt_txt 
//             + "<br> Temp: " 
//             + weekForecast.list[i].main.temp 
//             + "<br> Wind speed: " 
//             + weekForecast.list[i].wind.speed)
//         pastWeather.append(weekWeather);

//     }
// }

// getPastWeather();