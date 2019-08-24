// I want to give the computer options to pick from 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//I want to create variables that will change based the rules of the game
var wins = 0;
var loss = 0;
var numberGuesses = 10;
var guessLetters = [];


//II need the computer to randomize its choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)

// Need to create a function for every time the user presses a key that includes variables
document.onkeyup = function (event) {

    var userGuess = event.key;



// The computer needs to randomize choices

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    


//  Only run my code if the follows buttons are pressed
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") ||
    (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || 
    (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || 
    (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || 
    (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || 
    (userGuess === "z")) {

        for (i = 0; i < guessLetters.length; i++){
            if (userGuess === guessLetters[i]){
                alert ("No repeats!");
                return(userGuess)
            }}
        

 // Create "if" statements that the computer will respond to
        if (userGuess === computerGuess) {
            numberGuesses = 10;
            guessLetters = [];
            wins++;
            alert("You did it! You guessed " + "'" + userGuess + "'" + "! Was it luck or do you have the gift? Try again!");
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess);
        }

        if (userGuess != computerGuess) {
            numberGuesses--;
            guessLetters.push(userGuess);

            if (numberGuesses < 1) {
                numberGuesses = 10;
                guessLetters = []
                loss++
                alert("Sorry, maybe this psychic thing isn't for you.")
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                console.log(computerGuess);
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

        //every time a key is pressed I want to store it in an array,
        //every time a key is pressed i want to loop through this array and check if the key that i pressed is in the array
        // if it is in the array, then i dont want to run my logic, otherwise, run my logic

        
            


        // Need the guesses and information to be displayed
        document.getElementById("wins-text").textContent = "Wins: " + wins;
        document.getElementById("losses-text").textContent = "Losses: " + loss;
        document.getElementById("guessleft-text").textContent = "Guesses Left: " + numberGuesses;
        document.getElementById("guessupdate-text").textContent = "Guesses: " + guessLetters;




    }
}




