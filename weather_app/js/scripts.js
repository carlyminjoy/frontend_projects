// VARIABLES

// initialise temperature variable
var temp = 0;

// intialise default temperature to fahrenheit
var fah = true;

// button text depending on fahrenheit/celsius
var btnFar = "Switch to &deg;C";
var btnCel = "Switch to &deg;F";


// TO EXECUTE AS SOON AS PAGE LOADS

// if location services enabled, get user's location
$(document).ready(function() {
  if (navigator.geolocation) {
    getWeather(getLocation());
  }
  // initialise button text, set to default (fahrenheit)
  $("#toggle").html(btnFar);
});


// FUNCTIONS

// button function to toggle from celsius to fahrenheit
// and vice versa
$('#toggle').click(function() {
  if (fah) {
    temp = fahToCel(temp);
    displayTemp(temp, 'C');
    fah = false;
    $("#toggle").html(btnCel);
  } else {
    temp = celToFah(temp);
    displayTemp(temp, 'F');
    fah = true;
    $("#toggle").html(btnFar);
  }
})

// retrieve user's coordinates and calls getWeather function
// based on user's location
function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    return (lon, lat);
  })
}

// temperature conversion functions
function kelvinToFah(k) {
  return (k * (9/5) - 459.67);
}

function fahToCel(f) {
  return (f - 32) * (5/9);
}

function celToFah(c) {
  return (c * (9/5) + 32);
}

// display temperature in either celsius or fahrenheit
function displayTemp(t, d) {
  $("#temp").html("<h3>" + Math.floor(t) + " &deg;" + d + "</h3>");
}

// set background to image representing current weather condition
function displayBackground(condition) {
  $(".container-fluid").css("background-image", "url('img/" + condition + ".jpeg')");
}

// display user's current city location
function displayLocation(location) {
  $("#location").html(
    "<h3><strong>" + location + "</strong></h3>"
  );
}

// display weather condition
function displayCondition(condition) {
  $("#weather").html(
    "<h3><strong>" + condition + "</strong></h3>"
  );
  displayBackground(condition);
}

// display weather icon based on weather conditions
function displayIcon(icon) {
  $("#icon").html("<img src=\"http://openweathermap.org/img/w/" + icon + ".png\">");
}

// retrieve weather information
function getWeather(lon, lat) {
$.getJSON("https://api.openweathermap.org/data/2.5/weather?APPID=dc6b443deceda02a18b37174cc92c4fc&lat=-27.3944245&lon=153.074884&lat="+ lat + "&lon=" + lon,
  function(data) {
    // set location variable to user's city
    var location = data.name;

    // set temp varable and convert from kelvin to fahrenheit
    temp = kelvinToFah((data.main.temp));

    // initalise condiiton & icon variables for weather icon &
    // picture background based on condition keyword
    var condition = data.weather[0].main;
    var icon = data.weather[0].icon;

    // display weather information to user
    displayLocation(location);
    displayTemp(temp, 'F');
    displayCondition(condition);
    displayIcon(icon);
  })
}
