// initializing variables
var correct = 0;
var key = ["arsenal", "chelsea", "liverpool", "mancity", "manunited", "tottenham", "burnley", "everton", "leicestercity", "newcastle", "crystalpalace", "bournemouth", "watford", "brighton", "westham", "southampton", "huddersfield", "swanseacity", "westbrom", "stokecity"];
var guess = [];
var chances = 6;
var wrong = 0;
var wrongGuess = [];
var inGame = false;
var answer = [];
var wins = 0;
// randomly generating the word
function randTeam() {
    guess = [];
    wrongGuess = [];
    answer = key[Math.floor((Math.random()) * key.length)].toUpperCase();
    for (var i = 0; i < answer.length; i++) {
        if (answer[i] === " ") {
            guess.push(" ");
        }
        else {
            guess.push("_ ");
        }
    }
    inGame = true;
    chances = 6;
    correct = 0;
    document.getElementById("guess").innerHTML = guess.join("");
    document.getElementById("lose").innerHTML = "";
    document.getElementById("answerShow").innerHTML = "";
    document.getElementById("win").innerHTML = "";
    document.getElementById("wrongGuess").innerHTML = wrongGuess;
    document.getElementById("totalWins").innerHTML = wins;
    document.getElementById("chances").innerHTML = chances;
}
// guessing function, updating Guess array
document.onkeyup = function (event) {
    var userInput = event.key.toUpperCase();
    // check if game is in progress, if yes, execute game, if no, generate new word
    if (inGame) {
        var right = 0;
        var dupe = 0;
        // checking for whether input letter is in the answer
        for (j = 0; j < guess.length; j++) {
            if (userInput === answer[j] && userInput != guess[j]) {
                guess[j] = userInput;
                right++;
                correct++;
            }
            else if (userInput === guess[j]) {
                right++;
            }
        }
        document.getElementById("guess").innerHTML = guess.join("");
        // make sure we don't put duplicate letters in our wrongGuess array
        for (k = 0; k < wrongGuess.length; k++) {
            if (userInput === wrongGuess[k]) {
                dupe++;
            }
        }
        // if incorrect guess isn't in the wrongGuess array, push into wrongGuess array
        if (right === 0 && dupe === 0) {
            wrongGuess.push(userInput);
            chances--;
        }
        document.getElementById("wrongGuess").innerHTML = wrongGuess;
        document.getElementById("chances").innerHTML = chances;
        // if chances is 0, end the game
        if (chances < 1) {
            document.getElementById("lose").innerHTML = "You Lose. Press a key and try again."
            document.getElementById("answerShow").innerHTML = answer;
            inGame = false;
        }
        // if we guess all the letters, end the game
        if (correct === answer.length) {
            document.getElementById("win").innerHTML = "You Win! Press a key and try again."
            wins++;
            inGame = false;
        }
    }
    else {
        randTeam();
    }
}