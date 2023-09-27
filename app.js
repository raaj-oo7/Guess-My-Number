'use strict';

const numberElement = document.querySelector('.number');
const guessNumber = document.querySelector('.guess-number');
const body = document.querySelector('body');
const scores = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const playAgainButton = document.querySelector('.play-again');
const onDisplayMessage = document.querySelector('.message');
let updateHighScore = document.querySelector('.high-score');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    onDisplayMessage.textContent = message;
};
function checkGuessNumber() {
    const guess = guessNumber.valueAsNumber;

    // when there is no input
    if (!guess) {
        displayMessage('⛔ No Number!')
    }

    // when player wins
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!')

        numberElement.textContent = secretNumber;

        body.style.backgroundColor = '#60b347';

        numberElement.style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            updateHighScore.textContent = highScore;
        }
    }

    // when score is too high and too low
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 To High!' : '📉 To Low!');
            score--;
            scores.textContent = score;
        } else {
            displayMessage('☹️ You Lost the game!')
            scores.textContent = 0;
        }
    }
}

function resetGame() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    displayMessage('Start guessing...');

    scores.textContent = score;

    numberElement.textContent = '?';

    guessNumber.value = '';

    body.style.backgroundColor = '#222';

    numberElement.style.width = '15rem';
}

checkButton.addEventListener('click', checkGuessNumber);
playAgainButton.addEventListener('click', resetGame);