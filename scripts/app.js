// P1 object
const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
};

// P2 object
const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
};

// Reset button
const resetButton = document.querySelector("#reset");

// Select dropdown
const winningScoreSelect = document.querySelector("#playto");

// Actual score variables
let winningScore = 5;

// Boolean
let isGameOver = false;

// Refactoring
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

// Player 1
p1.button.addEventListener("click", function() {
    updateScores(p1, p2);
})

// Player 2
p2.button.addEventListener("click", function() {
    updateScores(p2, p1)
})

// Winning score selection
winningScoreSelect.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    reset();
})

// Reset button logic
resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("winner", "loser");
        p.button.disabled = false;
    }
}