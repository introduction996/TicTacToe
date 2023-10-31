function Player(name, marker) {
    const score = 0;
    return {name, marker}
}

const gameBoard = (function(){
    gameboard = ['X', 'O', 'O'];
    return gameboard
})();

const playerOne = Player('Johnny', 'X');
const playerTwo = Player('test player', 'O');
let currentPlayer = true;
const gameControl = (function() {
    const cells = document.querySelectorAll('.cell');
    function renderBoard() {
        for (let i = 0; i < gameboard.length; i++) {
            console.log(i);
            cells.forEach(cell => {
                if (i == cell.getAttribute('data-order')) {cell.innerText = gameboard[i]}
            })
        }
    }

    renderBoard()
})();