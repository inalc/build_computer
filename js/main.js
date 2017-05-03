$(document).ready(function() {
  showCat();
  //makeDialog();


  var $allSituations = $('.situation');
  var $defaultSituation = $('.default-situation');
  var $allOptions = $('.option');

  $allSituations.hide();
  $allOptions.hide();
  $defaultSituation.fadeIn(2000);
  $allOptions.delay(4000).fadeIn(2000);

  $('.option').on('click', function() {
  	var targetName = $(this).data('situation-target');
  	var $target = $('.situation[data-situation="' + targetName + '"]')

  	if($target.length == 1) {
  		$allSituations.hide();
  		$target.fadeIn(3000);
  	}
  });

  //$('.cat').on('click', function() {

  //});
});

function showCat() {
  $('.cat').append('<img src="images/cat.png"  id="floating" alt="cat" width="100px" height="100px"></div>');

}
//<div class=head id=floating>

function makeDialog() {
  $('.situation-text').append('<div class=speechbubble></div>');

}