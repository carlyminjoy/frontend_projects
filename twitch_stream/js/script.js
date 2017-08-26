var twitchUsers = [ "ESL_SC2", "OgamingSC2", "cretetion",
                    "freecodecamp", "storbeck", "habathcx",
                    "RobotCaleb", "noobs2ninjas"  ];

var twitchAPI = "https://wind-bow.gomix.me/twitch-api/users/freecodecamp"

$(document).ready(function() {
  // for (var user in twitchUsers) {
  //   $.getJSON(twitchAPI + user, function(json) {
  //     console.log(json);
  //   });
    $.getJSON(twitchAPI, function(json) {
      console.log(json);
    });
  $(".channels").html("Ready!");
});
