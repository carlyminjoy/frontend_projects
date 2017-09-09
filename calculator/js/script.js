var digit     = "";
var equation  = "";

$('.button').click(function() {
  digit     =   this.innerHTML;
  equation  +=  digit;
  $('.output').html(digit);
})
