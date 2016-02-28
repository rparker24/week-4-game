var targetNum = Math.floor(Math.random() * 101) + 19;
var wins = 0;
var losses = 0;
var userScore = 0;
var redValue = Math.floor(Math.random() * 12)
var blueValue = Math.floor(Math.random() * 12);
var yellowValue = Math.floor(Math.random() * 12);
var greenValue = Math.floor(Math.random() * 12);


$(document).ready(function() {

	$('#randNum').append(targetNum);
	
	var numAdd = function() {
		if (userScore == targetNum) {
			$('#scoreCount').prepend("<p>You Won!</p>");
			wins++;
			$('#wins').append(wins);
			userScore = 0;
		} else if (userScore > targetNum) {
			losses++;
			$('#losses').append(losses);
			userScore = 0;
		}
		$('#scoreDisplay').html(userScore);
	};
	// var numDisplay = $("<p>");

	$('#red').click(function() {
		userScore += redValue;
		numAdd();
	});
	$('#blue').click(function() {
		userScore += blueValue;
		numAdd();
	});
	$('#yellow').click(function() {
		userScore += yellowValue;
		numAdd();
	});
	$('#green').click(function() {
		userScore += greenValue;
		numAdd();
	});

	$('#wins').append(wins);
	$('#losses').append(losses);

});