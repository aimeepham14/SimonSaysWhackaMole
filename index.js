// creating an array to keep track of the original sequence and second array for player sequence

let computerSequence = [];
let playerSequence = [];
let round = 0;

// selecting the start button and creating a new start game function when the button is clicked

const startButton = document.querySelector('#start');

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

    const nextSequence = [...computerSequence];
    nextSequence.push(nextStep());
    playRound(nextSequence);
}

//activate when the start button is clicked

function startGame() {
    nextRound();
}

startButton.addEventListener('click', startGame);











// function startGame() {
//    startButton.addEventListener('click', startGame);
// }

// // updating the new rounds # to keep track of the number of rounds


// // function nextRound() {
// //     round += 1;
// //     const nextSequence = [...sequence];
// // }

// // playing the round by activating the tiles on the screen in the right order

// function activateTile(number) {
//     const tile = document.querySelector(`[data-tile='${number}']`);

//     tile.classList.add('activated');
    
//     setTimeout(() => {
//         tile.classList.remove('activated');
//     }, 300);
// }

// function playRound(nextSequence) {
//     nextSequence.forEach((number, index) => {
//         setTimeout(() => {
//             activateTile(number);
//         }, (index +1) * 600);
//     });
// }

// //creating a new random button press to the sequence
// function nextStep() {
//     const tiles = ['one', 'two', 'three', 'four'];
//     const random = tiles[Math.floor(Math.random() * tiles.length)];

//     return random;
// }

// function nextRound() {
//     round += 1;

//     const nextSequence = [...sequence];
//     nextSequence.push(nextStep());
//     playRound(nextSequence);
// }

// function startGame() {
//     nextRound();
// }

// startButton.addEventListener('click' startGame)