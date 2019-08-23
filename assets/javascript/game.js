// I want to give the computer options to pick from 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//I want to create variables that will change based the rules of the game
var wins = 0;
var loss = 0;
var numberGuesses = 10;
var guessLetters = [];



// Need to create a function for every time the user presses a key that includes variables
document.onkeyup = function(event) {

    var userGuess = event.key;

    
    
// The computer needs to randomize choices
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
// Create "if" statements that the computer will respond to

// if (userGuess !== letters) {
//     alert("stop");
// }

    if (userGuess === computerGuess) {
        wins++;
        numberGuesses = 9
        guessLetters = []
        alert("You did it! Was it luck or do you have the gift? Try again!");
    }

    if (userGuess != computerGuess) {
        numberGuesses--;
        guessLetters.push(userGuess);

        if (numberGuesses < 1) {
            numberGuesses = 9;
            guessLetters = []
            loss++
            alert("Sorry, maybe this psychic thing isn't for you.")
        }

    

    }

    if (wins > 9) {
        alert("You truly are gifted! Go play the lottery!");
        wins = 0;
        loss = 0;
    }

    if (loss > 9) {
        alert("Maybe it's time to accept that you should stick to your day job")
        wins = 0;
        loss = 0;
    }




// Need the guesses and information to be displayed
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("losses-text").innerHTML = "Losses: " + loss;
    document.getElementById("guessleft-text").innerHTML = "Guesses Left: " + numberGuesses;
    document.getElementById("guessupdate-text").innerHTML = "Guesses: " + guessLetters;




    

}



