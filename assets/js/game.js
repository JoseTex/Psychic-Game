
var wins = 0;
var losses = 0;
var choicesRemaining = 9;
var guessedLetters = [];
var botChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 

var botGuess = botChoices[Math.floor(Math.random()*botChoices.length)];

document.onkeyup = function(input){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        

    if (!botChoices.includes(userGuess)){
            alert('LETTER NOT NUMBER FAM!');
            return;
        }

    guessedLetters.push(userGuess);

    if (userGuess === botGuess){
        wins++;
        alert('Winner Winner Chicken Dinner!!!');
        choicesRemaining = 9; 
        guessedLetters.length = 0;     
    }

    else if (choicesRemaining === 0){
        losses++;
        alert('Hey!... You Lost Fam... Better Luck Next Round... *shrug*');
        choicesRemaining = 9;
        guessedLetters.length = 0;
    }
    else if (userGuess !== botGuess){
        choicesRemaining--; 
    }

    document.querySelector('#wins').innerHTML = "Wins: " + wins;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    document.querySelector('#remaining').innerHTML = "Choices Remaining: " + choicesRemaining;
    document.querySelector('#current-guess').innerHTML = "Your Guesses so far: " + guessedLetters;
}