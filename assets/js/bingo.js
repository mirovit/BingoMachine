$(function(){

	var allDigits = [];
	var digits = [];
	var bingoTimer;	

	var currDigit = $('#currentDigit');
	var digitsList = $('#digits');

	var run = function(){

		if( typeof bingoTimer === 'number' )
			return;

		bingoTimer = window.setInterval(rollTheBalls, 5000);
	};

	var pause = function(){
		window.clearInterval(bingoTimer);
		bingoTimer = null;
	};

	var toggleRunPause = function(){
		if( typeof bingoTimer === 'number' )
		{
			pause();
		} else {
			run();
		}
	};

	var displayDigit = function(digit){
		currDigit.html(digit);
		digitsList.prepend('<li class="bg-info">' + digit + '</li>');
	};

	var rollTheBalls = function(){

		if( allDigits.length === 0 )
		{
			currDigit.removeClass('bg-primary').addClass('bg-danger');
			return;
		}

		var newDigitIndex = Math.floor(Math.random() * allDigits.length);
		var digit = allDigits[newDigitIndex];

		digits.push(digit);
		allDigits.splice(newDigitIndex, 1);
		displayDigit(digit);

	};

	var init = function(){
		for(var i = 1; i <= 90; i++)
		{
			allDigits.push(i);
		}

		currDigit.html('-');
		digitsList.html('');
		currDigit.removeClass('bg-danger').addClass('bg-primary');
		bingoTimer = null;
	};

	$('#startBtn').click(function(){
		run();
	});

	$('#pauseBtn').click(function(){
		pause();
	});

	$('#resetBtn').click(function(){
		init();
	});

	$(document).keypress(function(evt) {
		if (evt.keyCode == 32) {

			toggleRunPause();

		}
	});

	init();


});