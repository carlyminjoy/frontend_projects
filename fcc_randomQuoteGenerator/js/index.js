$(document).ready(function () {
  getQuote();
})

function getQuote() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
  .done(update);
}

function update(response) {
  var quote = response.quoteText;
  var author = response.quoteAuthor;
  html = ("<h2>" + '"' + quote + '"' + "</h2>"
         + "<cite> - " + author + "</cite>");
  $("#quote").html(html);
}

$('#get-quote').click(function() {
  getQuote();
});