// var twitchUsers = [ "ESL_SC2", "OgamingSC2", "cretetion",
//                     "freecodecamp", "storbeck", "habathcx",
//                     "RobotCaleb", "noobs2ninjas"  ];

var twitchUsers = { 'freecodecamp': 79776140, 'esl_sc2': 30220059,
                    'storbeck': 152475255, 'ogamingsc2': 71852806,
                    'habathcx': 6726509, 'cretetion': 90401618,
                    'noobs2ninjas': 82534701, 'robotcaleb': 54925078 };

// var channelsURL = "https://wind-bow.gomix.me/twitch-api/channels/"
var streamsURL = "https://wind-bow.gomix.me/twitch-api/streams/"
var callback = "?callback=?";

$(document).ready(function() {
  for (var user in twitchUsers) {

    $.getJSON(streamsURL + twitchUsers[user] + callback, function(stream) {
      if (stream.stream) {

      } else {
        $(".channels").append("<p>" + user + twitchUsers[user] + "Offline.</p>")
      }
    });

    // var id        = 0;
    // var username  = "";
    // var string    = "";

    // $.getJSON(channelsURL + twitchUsers[user] + callback, function(json) {
    //   username  = json.name;
    //   id        = json._id;
    //   $(".channels").append(
    //     "<p id = " + id + ">" + username + ": " + id+ "</p>" );
    // });

    // $.getJSON(streamsURL + id + callback, function(stream) {
    //   if (stream.stream) {
    //     string = username + " ID (" + id + "): Live stream";
    //   } else {
    //     string = username + " ID (" + id + "): Offline";
    //   };
    //   $(".channels").append("<p>" + string + "</p>");
    // });
  };
});
