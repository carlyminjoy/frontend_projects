var quote = "";
var author = "";

function getQuote() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
  .done(update);
}

function update(response) {
  quote = response.quoteText;
  author = response.quoteAuthor;
  var html =  ("<h2>\"" + quote + "\"</h2>"
              + "<cite> - " + author + "</cite>");
  $("#quote").html(html);
}

$("#get-quote").click(function() {
  getQuote();
});

$("#tweet").click(function() {
  window.open("http://twitter.com/share?text=" + quote.replace(";", ". ") + "- " + author);
});

$(document).ready(function () {
  getQuote();
});
