// I want to give the computer options to pick from 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//I want to create variables that will change based the rules of the game
var wins = 0;
var loss = 0;
var numberGuesses = 10;
var guessLetters = [];

//I need the numbers to change on the html page
// var winsText = document.getElementById("wins-text");
// var lossText = document.getElementById("losses-text");
// var guessLeftText = document.getElementById("guessleft-text");
// var guessesText = document.getElementById("guessupdate-text");

// Need to create a function for every time the user presses a key that includes variables
document.onkeyup = function(event) {

    var userGuess = event.key;
    // guessLetters.push(userGuess);

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    if (userGuess === computerGuess) {
        wins++;
        numberGuesses = 9
        guessLetters = []
        alert("Winner!");
    }

    if (userGuess != computerGuess) {
        numberGuesses--;
        guessLetters.push(userGuess);

        if (numberGuesses < 1) {
            numberGuesses = 9;
            guessLetters = []
            loss++
            alert("Loser!")
        }

    // if ( wins-text > 9) {
    //     wins = 0;
    //     loss = 0;
    //     alert("New Game!")
    // }

    }


// Need the guesses and information to be displayed
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + loss;
    document.getElementById("guessleft-text").innerHTML = "Guesses Left: " + numberGuesses;
    document.getElementById("guessupdate-text").innerHTML = "Guesses: " + guessLetters;




    

}



