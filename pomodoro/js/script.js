var sessionTime = null;
var breakTime   = null;
var session     = true;
var currentSession = false;
var bell = null;

$(".session-more").click(function() {
    sessionTime++;
    $("#session").html(sessionTime);
});

$(".session-less").click(function() {
    if (sessionTime >= 0) {
        sessionTime--;
        $("#session").html(sessionTime);
    }
});

$(".break-more").click(function() {
    breakTime++;
    $("#break").html(breakTime);
});

$(".break-less").click(function() {
    if (breakTime >= 0) {
        breakTime--;
        $("#break").html(breakTime);
    }
});

var startTimer = function(mins) {
    var secs = 0;
    currentSession = true;
    var x = setInterval(function() {
        var separator = secs > 9 ? ": " : ": 0";
        $("#start").html(mins + separator + secs);

        if (secs == 0) {
            mins--;
            secs = 59;
        } else {
            secs--;
        }

        if (secs == 0 && mins == 0) {
            clearInterval(x);
            currentSession = false;
            session = !session;
            var msg = session ? "Start session" : "Start break";
            $("#start").html(msg);
            bell.play();
        }

    }, 1000);
}

function hide(msg) {

}

$("#clock").click(function() {
    if (!currentSession) {
        session ? startTimer(sessionTime) : startTimer(breakTime);
    }
});

$(document).ready(function() {
    sessionTime = parseInt($("#session").html());
    breakTime = parseInt($("#break").html());
    bell = new Audio("audio/bell.mp3")
});
