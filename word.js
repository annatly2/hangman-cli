var letterConstructor = require("./letter.js");

var wordBank = ["pen", "pencil", "marker", "highlighter"];

var lettersInWord = [];
var numBlanks = 0;
var blanksSuccess = [];
var wrongGuesses = [];


var wins = 0;
var losses = 0;



function Word(){

	this.selectWord = function(){
		var randomIndex = Math.floor(Math.random()*wordBank.length);
		var randomWord = wordBank[randomIndex];
		console.log(randomWord);
	}
}


module.exports = Word;