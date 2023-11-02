const cells = document.querySelectorAll('.cell');
const playerOne = Player('Johnny', 'X');
const playerTwo = Player('test player', 'O');
let currentPlayer = 1;

function Player(name, marker) {
    const score = 0;
    return {name, marker}
}

const gameBoard = (function(){
    gameboard = [];
    // empty slots because i need a way to 
    // tell between empty and not empty when 
    //redering the board later on
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
        gameboard[i] = currentPlayer == 1 ? playerOne.marker : playerTwo.marker
        currentPlayer *= -1;
        boardControl.renderBoard()
    }))
})();