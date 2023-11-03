const cells = document.querySelectorAll('.cell');
const playerOne = Player('Johnny', 'X');
const playerTwo = Player('test player', 'O');
let currentPlayer = playerOne;

function Player(name, marker) {
    const score = 0;
    function increaseScore(){
        score++
    }
    return {name, marker, increaseScore}
}

const gameBoard = (function(){
    gameboard = [];
    // empty slots because i need a way to 
    // tell between empty and not empty when 
    // redering the board later on
    for (let i = 0; i < 9; i++) {
        gameboard[i] = 'empty'
    }
    return gameboard
})();

const boardControl = (function() {
    function renderBoard() {
        for (let i = 0; i < gameboard.length; i++) {
            cells.forEach(cell => {
                if (i == cell.getAttribute('data-order') && gameboard[i]!='empty') {cell.innerText = gameboard[i]}
            })
        }
    }

    return {renderBoard}
})();

const gameFlow = (function(){
    cells.forEach(cell => cell.addEventListener('click', () => {
        let i = cell.getAttribute('data-order');
        if (gameboard[i]!= currentPlayer.marker) {
            gameboard[i] = currentPlayer.marker == playerTwo.marker ? playerOne.marker : playerTwo.marker;
            currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne;
            //saves function calls
            boardControl.renderBoard()
        }
    }))
})();