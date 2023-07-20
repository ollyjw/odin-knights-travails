// import './chess-knight.png';

// A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. Its basic move is two steps forward and one step to the side.

// Determine the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way

// Assign co-ordinates to each square
// Knight also has current coordinates plus array of (max 8) possible destinations
// Compare knight's coordinates to each square node

//Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.

// Use Breadth first search - the chessboard is most accurately represented as a 64-node graph. It's not really a tree since there are multiple ways to reach any particular node.

const board = genBoard();

class Knight {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    getCoord() {
        return board[this.row][this.col];
    }
}

function genBoard() {
    const container = document.querySelector('.container');
    const gameboard = document.createElement('div');
    const chessBoard = [];
    gameboard.classList.add('gameboard');
    for (let i = 0; i < 8; i++) { // ROW i.e letters
        // gen 8 row arrays each containing coord 
        const rowArray = [];
        let rowCoord = String.fromCharCode(65 + i); // convert to letters
        for (let j = 8; j > 0; j--) { // COL i.e. nums
            const colCoord = j;
            const coordinate = `${rowCoord} ${colCoord}`;
            const square = document.createElement('div');
            square.id = coordinate;
            rowArray.push(coordinate);
            square.classList.add('square');
            gameboard.appendChild(square);

            if ((i + j) % 2 == 0) {
                square.classList.add('square-white');
            } else {
                square.classList.add('square-black');
            }
        }        
        chessBoard.push(rowArray); // access coords by [rowIndex][colIndex]
    }
    console.log(chessBoard);
    console.log(chessBoard[0][2]);
    container.appendChild(gameboard);
    return chessBoard;
}

function knightMoves() {

}