var twitchUsers = { 'freecodecamp': 79776140, 'esl_sc2': 30220059,
                    'storbeck': 152475255, 'ogamingsc2': 71852806,
                    'habathcx': 6726509, 'cretetion': 90401618,
                    'noobs2ninjas': 82534701, 'robotcaleb': 54925078 };

var streamsURL = "https://wind-bow.gomix.me/twitch-api/streams/"
var callback = "?callback=?";

function getStream(user) {
  $.getJSON(streamsURL + user + callback, function(stream) {
    if (stream.stream) {
      $(".channels").append("<a href='"+stream.stream.channel.url+"' target=_'blank'><div class='live'><h3>" + user + "</h3>" +
                            "<p>" + stream.stream.game + "</p></div></a>");

    } else {
      $(".channels").append("<div class='offline'><h3>" + user + "</h3>" +
                            "<p>Offline</p></div>");
    }
  });
}

$(document).ready(function() {
  for (var user in twitchUsers) {
    getStream(user);
  };
});
