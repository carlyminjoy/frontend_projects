function openRandomArticle() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
}

$("form").submit(function() {
  $(".results").empty();
  var input = $(".search-box").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&namespace=0&format=json&search=" + input + "&origin=*";

  $.getJSON(url, function(data) {
    if (data[1].length === 0) {
      $(".results").append(
        "<h4>No matches.</h4>" );
    } else {
      for (var i = 0; i < 5; i++) {
        $(".results").append(
            "<a href=" + data[3][i] + " target='_blank'>" +
            "<div>" +
            "<h3>" + data[1][i] + "</h3>" +
            "<p>" + data[2][i] + "</p></div></a>" );
        }
    }
  });

  return false;
});
