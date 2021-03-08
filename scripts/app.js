// Button variables
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");

// Score display variables
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

// Actual score variables
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;

// Boolean
let isGameOver = false;

// Player 1
p1Button.addEventListener("click", function() {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})

// Player 2
p2Button.addEventListener("click", function() {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})