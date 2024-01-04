const cardArray = [
    {
        name: 'fries',
        img: 'img/fries.png',

    },
    {
        name: "cheeseburger",
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: "ice-cream",
        img: 'img/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name: "pizza",
        img: 'img/pizza.png',
    },
    {
        name: 'fries',
        img: 'img/fries.png',

    },
    {
        name: "cheeseburger",
        img: 'img/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png',
    },
    {
        name: "ice-cream",
        img: 'img/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        name: "pizza",
        img: 'img/pizza.png',
    },
];

cardArray.sort(() => 0.5 - Math.random());
// .sort() function will sort the array, and "0.5 - Math.random()" 
// will randomize the array", 0.5-Math.random() will return a number between -0.5 and 0.5, and the sort function will sort the array based on that number.

const gridDisplay = document.querySelector("#grid");
// select the element with id grid, and store it in a variable called gridDisplay,#grid is the id of the div element in index.html
let cardChosen = [];
let cardChosenId = [];
const cardsWon = [];
const resultDisplay = document.querySelector("#result");

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        // create an img element
        card.setAttribute("src", "img/blank.png");
        // set the src attribute of the img element to blank.png
        card.setAttribute("data-id", i);
        // set data-id for the cards, so that we can use it to check for match, we have 12 cards, so the data-id will be 0-11
        card.addEventListener("click", flipCard);
        // can't use flipCard() because it will call the function immediately,
        gridDisplay.appendChild(card);
        // append the card to the grid, so that it will show up on the page
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll("img");
    document.querySelectorAll("img");
    console.log(cards);
    console.log("checking for match");
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if (optionOneId === optionTwoId){
        alert("you have clicked the same image twice, please choose another image");
        cards[optionOneId].setAttribute("src", "img/blank.png");
        cards[optionTwoId].setAttribute("src", "img/blank.png");
    }

    if (optionOneId === optionTwoId){
        alert("you found a match!");
        cards[optionOneId].setAttribute("src", "img/white.png");
        cards[optionTwoId].setAttribute("src", "img/white.png");
        cards[optionOneId].removeEventListener("click", flipCard);  
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardChosen);
    } else{
        cards[optionOneId].setAttribute("src", "img/blank.png");
        cards[optionTwoId].setAttribute("src", "img/blank.png");
        alert("sorry, try again");
    }

    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = "Congratulations! You found them all!";
    }



    cardChosen = [];
    cardChosenId = [];

}
 
function flipCard(){

    const cardId = this.getAttribute("data-id");
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    console.log(cardArray[cardId].name);
    console.log("clicked", cardId);
    console.log(cardChosen);
    this.setAttribute ("src",cardArray[cardId].img);
    if( cardChosen.length === 2 ){
        setTimeout(checkMatch, 500);
    }
}

 

