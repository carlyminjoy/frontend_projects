$(document).ready(function() {
  if (navigator.geolocation) {
    getLocation();
  }
});

function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    getWeather(lon, lat);
  })
}

function getWeather(lon, lat) {
$.getJSON("api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon,
  function(data) {
    console.log(data);
  })
}
