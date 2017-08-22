// VARIABLES
// initialise temperature variable
var temp = 0;
// intialise default temperature to fahrenheit
var fah = true;
// button text depending on fahrenheit/celsius
var btnFar = "Switch to &deg;C";
var btnCel = "Switch to &deg;F";

// FUNCTIONS
/**
 * Retrieves user's coordinates and calls getWeather()
 * to obtain weather data from API
 */
function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;
    return (lon, lat);
  });
}

/**
 * Converts temperature from kelvin to fahrenheit
 */
function kelvinToFah(k) {
  return (k * (9/5) - 459.67);
}

/**
 * Converts temperature from fahrenheit to celsius
 */
function fahToCel(f) {
  return (f - 32) * (5/9);
}

/**
 * Converts temperature from celsius to fahrenheit
 */
function celToFah(c) {
  return (c * (9/5) + 32);
}

/**
 * Displays temperature in either celsius or fahrenheit
 */
function displayTemp(t, d) {
  $("#temp").html("<h3>" + Math.floor(t) + " &deg;" + d + "</h3>");
}

/**
 * Sets background to image representing current weather conditions
 */
function displayBackground(condition) {
  $(".container-fluid").css("background-image", "url('img/" + condition + ".jpeg')");
}

/**
 * Displays user's current city
 */
function displayLocation(location) {
  $("#location").html(
    "<h3><strong>" + location + "</strong></h3>"
  );
}

/**
 * Displays current weather condition of user's location
 */
function displayCondition(condition) {
  $("#weather").html(
    "<h3><strong>" + condition + "</strong></h3>"
  );
  displayBackground(condition);
}

/**
 * Displays weather icon representing current weather conditions
 */
function displayIcon(icon) {
  $("#icon").html("<img src=\"http://openweathermap.org/img/w/" + icon + ".png\">");
}

/**
 * Retrieves all weather information from API based on
 * user's location, including location, temperature,
 * weather condition and weather icon.
 */
function getWeather(lon, lat) {
$.getJSON("https://api.openweathermap.org/data/2.5/weather?APPID=dc6b443deceda02a18b37174cc92c4fc&lat=-27.3944245&lon=153.074884&lat="+ lat + "&lon=" + lon,
  function(data) {
    // set location variable to user's city
    var location = data.name;

    // set temp variable and convert from kelvin to fahrenheit
    temp = kelvinToFah((data.main.temp));

    // initalise condiiton & icon variables for weather icon &
    // picture background based on condition keyword
    var condition = data.weather[0].main;
    var icon = data.weather[0].icon;

    // display weather information to user
    displayLocation(location);
    displayTemp(temp, "F");
    displayCondition(condition);
    displayIcon(icon);
  });
}

// TO EXECUTE AS SOON AS PAGE LOADS
// if location services enabled, get user's location
$(document).ready(function() {
  if (navigator.geolocation) {
    getWeather(getLocation());
  }
  // initialise button text, set to default (fahrenheit)
  $("#toggle").html(btnFar);
});

/**
 * Button function to toggle between celsius to fahrenheit
 */
$("#toggle").click(function() {
  if (fah) {
    temp = fahToCel(temp);
    displayTemp(temp, "C");
    fah = false;
    $("#toggle").html(btnCel);
  } else {
    temp = celToFah(temp);
    displayTemp(temp, "F");
    fah = true;
    $("#toggle").html(btnFar);
  }
});
