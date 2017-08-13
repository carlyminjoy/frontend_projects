$(document).ready(function() {
  if (navigator.geolocation) {
    getLocation();
  }
  var temp = 0;
});

$('#toggle').click(function() {
  temp = Math.floor(fahToCel(temp));
  $("#temp").html("<p>" + temp + " degrees celsius</p>");
})

function fahToCel(f) {
  return (f - 32) * (5/9);
}
//
// function celToFah(c, f) {
//
// }

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
    temp = Math.floor(data.main.temp);
    $("#location").html(
      "<h3><strong>" + data.name + "</strong></h3>" + "<br>"
    );
    $("#weather").html(
      "<h3><strong>" + data.weather[0].main + "</strong></h3>"
    );
    $("#temp").html("<h3>" + temp + " degrees fahrenehit</h3>");
    $("#icon").html("<img src=\"http://openweathermap.org/img/w/" + icon + ".png\">");
  })
}
