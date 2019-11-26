const cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png',
		isFlipped: false
	},
	{   
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png',
		isFlipped: false
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png',
		isFlipped: false

	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png',
		isFlipped: false
	}

];

let cardsInPlay = [];
  

function createBoard(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	};
};
createBoard();


function checkForMath(cardElement){
	// This is changing the card image to the correct card selected (king or queen).
	if (cardsInPlay.length === 2) {
	 if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match! The game board will automatically reset.");
		setTimeout(restart, 2500);
	 } else {
		alert("Sorry, try again. The game board will automatically reset.");
		setTimeout(restart, 2500);
		};
	};
};

function flipCard(){
	var cardElement = this;
    var cardId = cardElement.getAttribute('data-id');
    if (cards[cardId].isFlipped) { return }
    cardElement.setAttribute('src', cards[cardId].cardImage);
    cards[cardId].isFlipped = true;
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank);
    console.log(cardsInPlay);
    checkForMath(cardElement);
};

function restart(){
	for(var i = 0; i < cards.length; i++){
		cardsInPlay.length = 0;
		var x = document.querySelectorAll('img');
		x[i].setAttribute('src', 'images/back.png');
		cards[i].isFlipped = false;

	};
};





