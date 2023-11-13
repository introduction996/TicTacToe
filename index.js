// greetings wanderer
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart');
restartButton.style.cssText = 'display: none';
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

    function clear(){
        for (let i = 0; i < 9; i++) {
            gameboard[i] = 'empty'
        }
    }
    return gameboard, {clear}
})();

const boardControl = (function() {
    function renderBoard() {
        for (let i = 0; i < gameboard.length; i++) {
            cells.forEach(cell => {
                if (i == cell.getAttribute('data-order') && gameboard[i]!='empty') {
                    cell.innerText = gameboard[i]
                }
            })
        }
    }

    return {renderBoard}
})();

const gameStatus = (function(){
    function checkWinner(board) {
        for (let i = 0; i < board.length; i++) {
            if (board[i] == playerOne.marker || board[i] == playerTwo.marker) {
                if (board[i] == board[i+1] && board[i] == board[i+2]) {
                    gameFlow.winningCondition();
                    break
                } else if (board[i] == board[i+2] && board[i] == board[i+4]) {
                    gameFlow.winningCondition();
                    break
                } else if (board[i] == board[i+3] && board[i] == board[i+6]) {
                    gameFlow.winningCondition();
                    break
                } else if (board[i] == board[i+4] && board[i] == board[i+8]) {
                    gameFlow.winningCondition();
                    break
                }
            }
        }
    }

    return {checkWinner}
})();

const gameFlow = (function(){
    function switchPlayer() {
        currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne;
    }

    function winningCondition() {
        restartButton.style.cssText = 'display: block';
        switchPlayer();
        console.log("the winner is: " + currentPlayer.name)
    }

    cells.forEach(cell => cell.addEventListener('click', () => {
        let i = cell.getAttribute('data-order');
        // not sure how future-proof this check is for now
        if (gameboard[i]!=playerOne.marker && gameboard[i]!=playerTwo.marker) {
            gameboard[i] = currentPlayer.marker == playerOne.marker ? playerOne.marker : playerTwo.marker;
            switchPlayer()
            //saves function calls
            boardControl.renderBoard();
            gameStatus.checkWinner(gameboard)
        }
    }))

    return {winningCondition}
})();

const restartGame = (function() {
    restartButton.addEventListener('click', () => {
        gameBoard.clear();
        cells.forEach(cell => {cell.innerText = ''});
        currentPlayer = playerOne;
    })
})();