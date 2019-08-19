// I want to give the computer options to pick from 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//I want to create variables that will change based the rules of the game
var win = 0;
var loss = 0;
var guessesLeft = 10;
var guessedLetters = [];

//I need the numbers to change on the html page
var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessleft-text");
var guessesText = document.getElementById("guessupdate-text");

// Need to create a function for every time the user presses a key that includes variables
document.onkeyup = function(event) {

var userGuess = event.key;
guessedLetters.push(userGuess);

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

if (userGuess === computerGuess) {
    win++;
    guessesLeft = 9}

else {guessesLeft--}
}


// Need the guesses and information to be displayed
winsText.textContent = wins;