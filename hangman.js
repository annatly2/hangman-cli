var inquirer = require("inquirer");
var wordBank = ["pen", "pencil", "marker", "highlighter"];

var randomIndex = Math.floor(Math.random()*wordBank.length);
var randomWord = wordBank[randomIndex];

var lettersInWord = [];
var numBlanks = 0;
var blanksSuccess = [];
var wrongGuesses = [];

var wins = 0;
var losses = 0;
var guessesLeft = 3;
var count = 0;

function startOfGame(){

	console.log(randomWord);

	lettersInWord = randomWord.split("");
	console.log(lettersInWord);
	numBlanks = lettersInWord.length;
	console.log(numBlanks);

	//reset
	guessesLeft = 3;
	wrongGuesses = [];
	blanksSuccess = [];

	//creating underscores in place of letters

	for (i = 0; i < numBlanks; i++){
		blanksSuccess[i] = "_";
		//console.log(blanksSuccess);
	}
	var wordWithSpace = blanksSuccess.join(" ");
	console.log(wordWithSpace);

}

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

function checkLetters(){
	var isLetterInWord = false;
	//is letter in word?
	for (var i = 0; i < numBlanks; i++){
		if(randomWord[i] === letter){
			isLetterInWord = true;
		}
	}
	// if so, where it is in the word?
	if(isLetterInWord){
		for (var i = 0; i < numBlanks; i++){
			if (randomWord[i] === letter){
				blanksSuccess[i] == letter;
			}
		}
	}else{
		wrongGuesses.push(letter);
		//count++;
		console.log(guessesLeft);
	}
}


startOfGame();
guessLetterPrompt();
checkLetters();