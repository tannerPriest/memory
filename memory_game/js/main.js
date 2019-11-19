const cards = ["Queen", "Queen", "King", "King"];

let cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User Flipped " + cardOne +".");
console.log("User Flipped " + cardTwo +".");



if(cardsInPlay[0] === cardsInPlay[1]){
	alert("A match!!");
} else{
	alert("Sorry, try again.");
};



