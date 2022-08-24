// creating an array to keep track of the original sequence and second array for player sequence

let computerSequence = [];
let playerSequence = [];
let round = 0;

// selecting the start button and creating a new start game function when the button is clicked

const startButton = document.querySelector('.start');

const currentCount = document.querySelector('.js-counter');

const buttonContainer = document.querySelector('.js-container');


//Creating restart button
function restartGame(text) {
    alert(text);
    computerSequence = [];
    playerSequence = [];
    round = 0;
    buttonContainer.classList.add('dont-click');
}

//to indicate that the computer is finished and it's the player's turn
function playerTurn(round) {
    buttonContainer.classList.remove('dont-click');
    // info.textContent = `Your turn: ${round}' Tap${round > 1 ? 's' : ''}`;
}

// making the computer creating random combinations for the sequence

function activateTile(number) {
    const tile = document.querySelector(`[data-tile='${number}']`);

    tile.classList.add('activated');
    
    setTimeout(() => {
        tile.classList.remove('activated');
    }, 300);
}

function playRound(nextSequence) {
    nextSequence.forEach((number, index) => {
        setTimeout(() => {
            activateTile(number);
        }, (index + 1) * 600);
    });
}

function nextStep() {
    const tiles = ['one', 'two', 'three', 'four'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];

    return random;
}

//adding another round after a sequence combo

function nextRound() {
    round += 1;


//adding to the counter after each round
buttonContainer.classList.add('dont-click');

currentCount.textContent = `Round ${round}`;

const nextSequence = [...computerSequence];
nextSequence.push(nextStep());
playRound(nextSequence);


//adding a delay after the computer is done with the sequence so the player can execute the sequence
computerSequence = [...nextSequence];
 setTimeout(() => {
    playerTurn(round);
}, round * 600 + 1000);
}

//function to push tile value to the player sequence and stores the index. If they are equal, the round is over and the next round can begin

function handleClick(tile) {
    const index = playerSequence.push(tile) - 1;
    
    const remainingClicks = computerSequence.length - playerSequence.length;


//restart game if the player does not match computer
    if(playerSequence[index] !== computerSequence[index]) {
        restartGame('Game over, try again!');
        return;
    }

    if (playerSequence.length === computerSequence.length) {
        if (playerSequence.length === 20) {
            restartGame('Congrats! You completed all the rounds');
            return
        }
        playerSequence = [];
        setTimeout(() => {
            nextRound();
        }, 1000);
        return;
    }
}
//activate when the start button is clicked

function startGame() {
    nextRound();
}

startButton.addEventListener('click', startGame);
//detecting whehter to move to the next round or end game
buttonContainer.addEventListener('click', event => {
    const { tile } = event.target.dataset;

    if (tile) handleClick(tile);
});