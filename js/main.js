$(document).ready(function() {
  



  var $allScenes = $('.scene');
  var $defaultScene = $('.default-scene');
  var $allOptions = $('.option');

  $('.inventory').hide();
  $allScenes.hide();
  $allOptions.hide();
  $defaultScene.fadeIn(200);
  $allOptions.delay(4000).fadeIn(2000);

  $('.option').on('click', function() {


    var targetName = $(this).data('target');
    console.log(targetName);
  	var $target = $('#' + targetName);

  	if($target.length === 1) {
  		$allScenes.hide();
      $allOptions.hide();

  		$target.fadeIn(2000);
      $allOptions.delay(5000).fadeIn('slow');
  	}

    if(targetName == "help-info"){
      $('.inventory').show();
    }

    if(targetName == "transition"){
      $('.cat').hide();
    } else {
      $('.cat').fadeIn('fast');
    }

  });


});

