// You shouldnadd the tiles of gameboard to the dom
// The AI must select a random tile on the gameboard
// You will select tiles and the game will indicate if it is a hit or miss
// On HIT the game is over
// Add a button to start a new game
var gameboard = document.getElementById('gameboard');
var won = document.getElementById('win');
var miss = document.getElementById('miss');
var hit = false;
var gameboardSize = [
    {position: 0}, {position: 1}, {position: 2}, {position: 3}, {position: 4}, {position: 5}, {position: 6}, {position: 7}, {position: 8},  {position: 9}, {position: 10}, {position: 11}, {position: 12}, {position: 13}, {position: 14}, {position: 15}, {position: 16}, {position: 17}, {position: 18}, {position: 19}, {position: 20}, {position: 21}, {position: 22}, {position: 23}, {position: 24}, {position: 25}, {position: 26},{position: 27}, {position: 28}, {position: 29}, {position: 30}, {position: 31}, {position: 32}, {position: 33}, {position: 34}, {position: 35}
];
for (i = 0; i < gameboardSize.length; i++) {
    var space =  document.createElement('button');
    space.classList.add('block');
    space.setAttribute('data-block', i);
    gameboard.appendChild(space);
    space.addEventListener('click', function () {
        check(this)
    });
}
var AI = gameboardSize[Math.floor(Math.random() * Math.floor(gameboardSize.length))];
console.log(AI);


function check(tiles) {
    event.preventDefault();
    let tile = tiles.getAttribute('data-block');
    if (!hit){
        if (tile == AI.position) {
            won.innerText = "You win!";
            tiles.style.backgroundColor = "rgba(0, 128, 0, 0.753)";
            miss.remove();
            hit = true;
        }else {
            miss.innerText = "Miss";
            tiles.style.backgroundColor = "rgba(255, 0, 0, 0.653)";
            hit = false;
        }

    }
}
function newGame() {
    let clearBoard = document.getElementById('reset');
    clearBoard.addEventListener('click', newGame());
    document.getElementById('game').reset();    
}

