// initialise variables
var sessionTime     = null;
var breakTime       = null;
var session         = true;
var currentSession  = false;
var bell            = null;

// increments session timer via + button
$(".session-more").click(function() {
    sessionTime++;
    $("#session").html(sessionTime);
});

// decrements session timer via - button
$(".session-less").click(function() {
    if (sessionTime > 1) {
        sessionTime--;
        $("#session").html(sessionTime);
    }
});

// increments break timer via + button
$(".break-more").click(function() {
    breakTime++;
    $("#break").html(breakTime);
});

// decrements break timer via - button
$(".break-less").click(function() {
    if (breakTime > 1) {
        breakTime--;
        $("#break").html(breakTime);
    }
});

// runs when big start button is clicked
var startTimer = function(mins) {
    // initialises seconds to 0
    var secs = 0;

    // sets currentSession to true so another session cannot commence
    currentSession = true;

    // every second, decrements the session/break time
    // and regenerates html to display on big circle button
    var x = setInterval(function() {
        // enables 0s to show if seconds are only 1 digit
        var separator = secs > 9 ? ": " : ": 0";
        // regenerates html for current session time
        $("#start").html(mins + separator + secs);

        // decrements timer, minutes are decremented only
        // if seconds reach 0
        if (secs == 0) {
            mins--;
            secs = 59;
        } else {
            secs--;
        }

        // ends the timer after seconds and minutes == 0
        if (secs == 0 && mins == 0) {
            // clears the timer
            clearInterval(x);

            // resets the current timer to inactive so
            // the big start button can be pressed again
            currentSession = false;

            // if a session timer has ended, sets to break timer
            // and vice versa
            session = !session;

            // updates text on big start button depending on
            // whether it is break or session timer
            var msg = session ? "Start session" : "Start break";
            $("#start").html(msg);

            // Rings the bell to say timer has ended!
            bell.play();
        }

    }, 1000);
}

// Big start button starts timer and this function!
$("#clock").click(function() {
    // only works if there is no current timer happening
    if (!currentSession) {
        // if session, then it displays a session timer,
        // otherwise timer displays as a break timer
        session ? startTimer(sessionTime) : startTimer(breakTime);
    }
});

$(document).ready(function() {
    sessionTime = parseInt($("#session").html());
    breakTime = parseInt($("#break").html());
    bell = new Audio("audio/bell.mp3")
});
