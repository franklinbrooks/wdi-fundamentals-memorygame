console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*
if (cardTwo === cardFour) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again.");
}
*/
var gameBoard = document.getElementById('game-board');
var createCards = function() {
  
  for (var i = 0; i < 4; i++) {
    var cardElement = document.createElement('div'); // create a new div tag
    cardElement.className = 'card'; // give the div a class name
    gameBoard.appendChild(cardElement); // add the div to the game bord
  }
}

createCards();


