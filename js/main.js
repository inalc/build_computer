$(document).ready(function() {
  makeCat();
  makeDialog();
});

function makeCat() {
  $('.cat').append('<div class=head id=floating></div>');
}

function makeDialog() {
  $('.dialog').append('<div class=speechbubble>Insert Dialog here</div>');
}