const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const gamers = [p1, p2]

const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

function playerUpdate(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    };
}

p1.button.addEventListener('click', function () {
    playerUpdate(p1, p2);
});

p2.button.addEventListener('click', function () {
    playerUpdate(p2, p1);
});

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    for (let gamer of gamers) {
        gamer.score = 0;
        gamer.display.textContent = gamer.score;
        gamer.display.classList.remove('has-text-success', 'has-text-danger')
        gamer.button.disabled = false;
    }
    isGameOver = false;
}