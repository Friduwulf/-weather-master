var cityInput = document.getElementById("cityInput");
var cityButton = document.getElementById("cityButton");
var pastWeather = document.getElementById("pastWeather");
var pastWeatherList = document.getElementById("pastWeatherList");
var cityName = document.getElementById("cityName");
var currentTemp = document.getElementById("currentTemp");
var currentHumidity = document.getElementById("currentHumidity");
var currentWind = document.getElementById("currentWind");
var today = dayjs().format("MM/DD/YYYY");
var citiesSavedArr = [];

//Standard view on page load
window.addEventListener("load", function (event) {
    cityInput.value = 'Fredericton';
    newFetch();
});

//Event listener for the search button
cityButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("button clicked");
    console.log(cityInput.value);
    var city = cityInput.value.trim();
    console.log(citiesSavedArr);
    //Prevent duplicate searches saved, if not duplicate, add to array
    if (citiesSavedArr.includes(city)) {
        return;
    } else {
    citiesSavedArr.push(city);
    init();
    searchedCities();
    newFetch();
    }
});

//stores the searched cities in local storage
function init() {
    localStorage.setItem("cities", JSON.stringify(citiesSavedArr));
}

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
};
//creates buttons for previously searched cities, re-searches city when button clicked
function searchedCities() {
    var citiesEl = $('<li>');
    var cittiesButton = $('<button>');

    cittiesButton.attr('id', 'prevSearch');
    cittiesButton.addClass('btn', 'list-group-item');
    cittiesButton.text(cityInput.value);
    citiesEl.append(cittiesButton);
    $('#pastWeatherList').prepend(citiesEl);
    $('#prevSearch').on('click', function() {
        cityInput.value = $(this).text();
        newFetch();
    });
}