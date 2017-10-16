// ========== Global Variables ========== \\

// Game Score
var wins = 0;
var losses = 0;
var score = 0;

/////////////////////////////////////////////////////////////////////
// How to get a random number between another number?
// Example a number between 5 & 10.
// x = start, y = end
// x = 5, y = 10
// Math.floor(Math.random() * ((10-5)+1) + 5);
// Math.floor(Math.random() * 6 + 5);
/////////////////////////////////////////////////////////////////////

// The random number shown at the start of the game should be between 19 - 120.
var randomNumber = Math.floor(Math.random() * 102) + 19;

// Each crystal should have a random hidden value between 1 - 12.
var redCrystal = Math.floor(Math.random() * 12) + 1;
var blueCrystal = Math.floor(Math.random() * 12) + 1;
var yellowCrystal = Math.floor(Math.random() * 12) + 1;
var greenCrystal = Math.floor(Math.random() * 12) + 1;



// ========== Update IDs on HTML ========== \\
var updateOnHTML = function() {
$('#score').html(score);
$('#wins').html(wins);
$('#losses').html(losses);
$('#randomNumber').html(randomNumber);
}



// ========== Iinitalize Game ========== \\
var initGame = function() {
    if (score === randomNumber) {
        wins++;
        alert("You win!");
        resetGame();
    } else if (score > randomNumber) {
        losses++;
        alert("You lost");
        resetGame();
    }
        updateOnHTML();
}



// ========== Reset Game ========== \\
// Reset Variables every time we reset the game
var resetGame = function() {
    score = 0;
    randomNumber = Math.floor(Math.random() * 102) + 19;
	redCrystal = Math.floor(Math.random() * 12) + 1;
    blueCrystal = Math.floor(Math.random() * 12) + 1;
    yellowCrystal = Math.floor(Math.random() * 12) + 1;
    greenCrystal = Math.floor(Math.random() * 12) + 1;
    updateOnHTML();
}



// ========== Document Ready Function ========== \\
//Set on Click function for all Crystal IDs
updateOnHTML();
$(document).ready(function() {
    $('#redCrystal').click(function() {
        score = score + redCrystal;
        initGame();
    })

    $('#blueCrystal').click(function() {
        score = score + blueCrystal;
        initGame();
    })

    $('#yellowCrystal').click(function() {
        score = score + yellowCrystal;
        initGame();
    })

    $('#greenCrystal').click(function() {
        score = score + greenCrystal;
        initGame();
    })
});