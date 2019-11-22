const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/Images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/Images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/Images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/Images/king-of-diamonds.png"
	}

];

let cardsInPlay = [];

function createBoard(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/Images/back.png');
		cardElement.setAttribute('data-id', i)
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	};
};

createBoard();

function checkForMath(){
	 cardElement.setAttribute('src', cards.cardImage);
	// This is changing the card image to the correct card selected (king or queen).
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	};
};

function flipCard(cardElement){
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank);
    console.log(cardsInPlay);
    checkForMath();
};
