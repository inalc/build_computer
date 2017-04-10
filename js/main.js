$(document).ready(function() {
  makeCat();
  makeDialog();


  $('.cat').on('click', function() {
  	$(this).effect('pulsate', 3);

  });
});

function makeCat() {
  $('.cat').append('<div class=head id=floating></div>');

}



function makeDialog() {
  $('.dialog').append('<div class=speechbubble>Insert Dialog here</div>');
}