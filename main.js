var inquirer = require("inquirer");
var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");


var guessesLeft = 3;
var count = 0;

		var randomIndex = Math.floor(Math.random()*wordBank.length);
		var randomWord = wordBank[randomIndex];


var guessLetterPrompt = function(){
	if (count < guessesLeft){
		inquirer.prompt([
		{
			name: "letters guessed",
			message: "Guess a letter!"
		}

		]).then(function(letters){
			count++;
			console.log(letters);
			guessLetterPrompt();

		})

	}

};


guessLetterPrompt();