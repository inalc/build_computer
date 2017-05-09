$(document).ready(function() {
	testingStory();


	var $allScenes = $('.scene');
  var $defaultScene = $('.default-scene');
  var $allOptions = $('.option');
  var $contentDivs = $('.main-content');

  $allScenes.hide();
  $allOptions.hide();
  $contentDivs.hide().fadeIn(2000);
  //$defaultScene.fadeIn(2000);
  //$allOptions.delay(5000).fadeIn('fast');

	//$('.option').on('click', function() {
	//var targetName = $(this).data('scene-target');
	//var $target = $('.scene[data-scene="' + targetName + '"]');

	$('.option').on('click', function() {
		var targetName = $(this).data('scene-target');
		var $target = $('.scene[id="' + targetName + '"]');

		if($target.length === 1) {
			$allScenes.hide();
			$allOptions.hide();
			//$target.fadeIn(1000);

		}
	});

});


function testingStory() {

	var start = {
		text: '<p>Welcome to Ina\'s Computer Shop. We build and repair computers.<br><br>\
		Oh! You must be the new trainee. My name\'s Matt, the best cat employee in this place \
		and the best manager as of today. We\'ve been in need of help ever since two of our \
		employees disappeared...<br><br>Anyway, I\'m so glad you\'re here! Let\'s start. </p><br>',

		option1: '<button type="button" class="option default-option" \
		data-scene-target="task_intro">- I\'m ready</button>'
	};

	$('.default-scene').append(start.text, start.option1);


	var task_intro = {
		text: '<p>As a newbie, I\'ll have you start out with computer components.<br><br>\
		We get a lot of customers that want to build their own computer. You\'ll be in charge \
		of finding the specific parts they need and explaining their purpose. \
		You also have to clarify any questions and concerns they have.<br><br>\
		Sounds easy, right? I\'ll be in the back doing repairs, but don\'t forget: I\'m always watching. </p><br>',

		option1: '<button type="button" class="option" \
		data-scene-target="help_info">- Yes, sir.</button><br>',

		option2: '<button type="button" class="option" \
		data-scene-target="help_info">- What if I need help?</button>'

	};

	var scene2 = {
		text: 'If you really need help, call me by pressing that red button by your side.<br><br>\
		By the way, here\'s the inventory list. Everything\'s out here in the front, but let me\
		know if we\'re missing anything and I\'ll get it for you. <br><br>\
		Good luck!<br><br>',

		option1: '<button type="button" class="option" \
		data-scene-target="#">- Thank you!</button>',
	}

	var sceneTitles = ['task_intro', 'help_info'];

	$('.scene').append(task_intro.text, task_intro.option1);

}

