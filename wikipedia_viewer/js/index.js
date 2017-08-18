function openRandomArticle() {
  window.open("https://en.wikipedia.org/wiki/Special:Random")
}

$("form").submit(function() {
  $(".results").empty();
  var input = $(".search-box").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&namespace=0&format=json&search=" + input + "&origin=*";

  $.getJSON(url, function(data) {
    if (data[1].length == 0) {
      $(".results").append(
        "<h4>No matches.</h4>" );
    } else {
      for (var i = 0; i < 5; i++) {
        var link = data[3][i];
        var title = data[1][i];
        var blurb = data[2][i];

        $(".results").append(
            "<a href=" + link + " target='_blank'>" +
            "<div>" +
            "<h3>" + title + "</h3>" +
            "<p>" + blurb + "</p></div></a>" );
        }
    };
  })

  return false;
});
