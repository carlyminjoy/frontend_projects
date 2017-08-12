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
$.getJSON("http://api.openweathermap.org/data/2.5/weather?APPID=dc6b443deceda02a18b37174cc92c4fc&lat=-27.3944245&lon=153.074884&lat="+ lat + "&lon=" + lon,
  function(data) {
    var icon = data.weather[0].icon;
    html = "<h3>" + data.name + "</h3>" + "<br>" +
           "<h4>" + data.weather[0].main + "</h4>"
    $("#location").html(html);
    $("#icon").html("<img src=\"http://openweathermap.org/img/w/" + icon + ".png\">");
  })
}
