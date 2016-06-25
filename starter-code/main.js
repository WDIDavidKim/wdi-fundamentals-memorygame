var cards = ['spades', 'spades', 'hearts', 'hearts'];

var cardsInPlay = [];

var board = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}
 function isTwoCards() {
 
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'spades') {
		this.innerHTML = "<img src='http://i.imgur.com/yQcqkya.png?1'>"; 
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/WkMqT6Q.jpg?1'>"; 
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();
