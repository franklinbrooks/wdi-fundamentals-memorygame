console.log("JS file is connected to HTML! Woo!");

var cards = [];
var four =  ['queen_of_hearts', 'queen_of_clubs', 'king_of_hearts', 'king_of_clubs']; 
var eight =  ['queen_of_hearts', 'queen_of_clubs', 'king_of_hearts', 'king_of_clubs', 'ace_of_spades', 'ace_of_diamonds', 'ten_of_spades', 'ten_of_diamonds'];
var cards = four;
var cardsInPlay = []; 
var board = document.getElementById('game-board');// find the board & set it to a variable
var resetButton = document.getElementById('resetButton'); 
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var score = 0;

// From the article "The only way to shuffle an array in JavaScript"
// https://www.frankmitchell.org/2015/01/fisher-yates/
// Originally adapted by Chris Perry @ GA London WDI

var shuffle = function(array) {
  var i = 0;
  var j = 0;
  var temp = null;
  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffle(cards);

var createBoard = function() {
  for (var i=0; i<cards.length; i++) {  // loop through array to create card elements for board
    var cardElement = document.createElement('div'); // create div to be used as card
    cardElement.className = 'card'; // add class to card element to help styling
    cardElement.setAttribute('data-card', cards[i]); // set 'data-card' to array element i.e. "king"
    cardElement.addEventListener('click', isTwoCards); // on card click calls isTwoCards
    board.appendChild(cardElement);  // append the card to the board
  }
}

var isTwoCards = function() { //checks to see if there are cards in play
  cardsInPlay.push(this.getAttribute('data-card'));  // add card to cardsInPlay
	if (this.getAttribute('data-card') === 'king_of_clubs') {
		this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/2/22/Playing_card_club_K.svg'>"; 
	} 
	else if (this.getAttribute('data-card') === 'king_of_hearts') {
		this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/d/dc/Playing_card_heart_K.svg'>"; 
	} 
	else if (this.getAttribute('data-card') === 'queen_of_clubs') {
		this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/f/f2/Playing_card_club_Q.svg'>"; 
	} 
	else if (this.getAttribute('data-card') === 'ace_of_spades') {
		this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/2/25/Playing_card_spade_A.svg'>"; 
	} 
	else if (this.getAttribute('data-card') === 'ace_of_diamonds') {
		this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/d/d3/Playing_card_diamond_A.svg'>"; 
	}
	else if (this.getAttribute('data-card') === 'ten_of_spades') {
		this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Playing_card_club_10.svg'>"; 
	} 
	else if (this.getAttribute('data-card') === 'ten_of_diamonds') {
		this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/3/34/Playing_card_diamond_10.svg'>"; 
	} 
	else {
		this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/7/72/Playing_card_heart_Q.svg'>"; //redQueen
	}
  if (cardsInPlay.length === 2) {  // if two cards in play check for a match
    isMatch(cardsInPlay);  // pass cardsInPlay as argument to isMatch function 
  }
}

var isMatch = function(selectedCard) {
  setTimeout(function() {
    if (cardsInPlay[0].charCodeAt(0) === cardsInPlay[1].charCodeAt(0)) {
      alert('You found a match!');
      addScore();
      resetButton.className = 'resetButton_visible'; 
    } else {
      alert('Sorry, try again.');
      var faceDown = document.getElementsByClassName('card');   // Remove card images
  		for (var k = 0; k < faceDown.length; k++) {
    		faceDown[k].innerHTML = '';
    		cardsInPlay = [];   // reset array
  		}
    }
  }, 150);
};

var resetBoard = function() {
  cardsInPlay = [];   // reset array
  shuffle(cards);  // Re-order the cards array
  var faceDown = document.getElementsByClassName('card');   // Remove card images
  for (var k = 0; k < faceDown.length; k++) {
    faceDown[k].innerHTML = '';
  }
  for (var l = 0; l < cards.length; l++) {  // Apply revised array to cards on board
    var cardReset = document.getElementsByClassName('card'); // create a new div tag
    cardReset[l].setAttribute('data-card', cards[l]); // set the data-card to its card value
  }
  resetButton.className = 'resetButton_invisible';   // Hide reset button again
};

function showX() {
    alert(x);
}

var clearBoard = function() {
  var emptyDiv = document.getElementById('game-board');
  emptyDiv.innerHTML = "";
}

b1.onclick = function() {
    x = "Now creating a four-card game board";
    showX();
    clearBoard();
    cards = four;
    createBoard();
};

b2.onclick = function() {
    x = "Now creating an eight-card game board";
    showX();
    clearBoard();
    cards = eight;
    createBoard();
};

b3.onclick = function() {
  toggleScoreColor();
};

b4.onclick = function() {
  resetScore();
};

function toggleScoreColor() {
  document.getElementById("qty").classList.toggle("visibleScore");
  document.getElementById("qty").classList.toggle("invisibleScore");
  document.getElementById("b3").innerHTML.toggle("SHOW SCORE");
  document.getElementById("b3").innerHTML.toggle("HIDE SCORE");
}

function resetScore(){
  score = 0;
  scoreDiv = document.getElementById("qty");
  scoreDivPartOne = "Score: ";
  scoreDivPartTwo = score;
  scoreDivCombined = scoreDivPartOne + scoreDivPartTwo
  scoreDiv.innerHTML = scoreDivCombined;
}

function addScore(){
  score = score + 1;
  scoreDiv = document.getElementById("qty");
  scoreDivPartOne = "Score: ";
  scoreDivPartTwo = score;
  scoreDivCombined = scoreDivPartOne + scoreDivPartTwo
  scoreDiv.innerHTML = scoreDivCombined;
}


resetButton.addEventListener('click', resetBoard); // Attach event handler to resetButton

createBoard();

//Can't click the same one
//Animate card flip
// Begin game button and play again activate timer
// count tries 

