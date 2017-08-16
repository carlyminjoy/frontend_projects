function openRandomArticle() {
  window.open("https://en.wikipedia.org/wiki/Special:Random")
}

$("form").submit(function() {
  $(".results").html("<p>RESULTS</p>");
})
