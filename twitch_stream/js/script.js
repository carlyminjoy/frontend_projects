var twitchUsers = [ 'freecodecamp', 'esl_sc2', 'storbeck', 'ogamingsc2', 'habathcx',
                  'cretetion', 'noobs2ninjas', 'robotcaleb'];

var streamsURL = "https://wind-bow.gomix.me/twitch-api/streams/";
var callback = "?callback=?";

$("button.live").click(function() {
  $("div.offline").fadeOut(500);
});

$("button.all").click(function() {
  $("div.offline").fadeIn(500);
});

function getStream(user) {
  $.getJSON(streamsURL + twitchUsers[user] + callback, function(stream) {
    if (stream.stream) {
      $(".channels").append("<a href='"+stream.stream.channel.url+"' target=_'blank'><div class='online'><h3>" +
                            twitchUsers[user] + "</h3>" +
                            "<p>" + stream.stream.game + "</p></div></a>");
    } else {
      $(".channels").append("<div class='offline'><h3>" + twitchUsers[user] + "</h3>" +
                            "<p>Offline</p></div>");
    }
  });
}

$(document).ready(function() {
  if (true) {
    for (var user in twitchUsers) {
      getStream(user);
    }
  }
});
