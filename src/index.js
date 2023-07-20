// import './chess-knight.png';

// A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. Its basic move is two steps forward and one step to the side.

// Determine the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way

// Assign co-ordinates to each square
// Knight also has current coordinates plus array of (max 8) possible destinations
// Compare knight's coordinates to each square

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
    getPossibleMoves() { //two steps forward and one step to the side.
        // Make 2 arrays, one containing all possible moves from a given coord (calculations of row/col indeces) & another to store the new coords
        const result = [];
        const moves = [
            [
                this.row - 2,
                this.col - 1,
            ],
            [
                this.row - 2,
                this.col + 1,
            ],
            [
                this.row - 1,
                this.col - 2,
            ],
            [
                this.row - 1,
                this.col + 2,
            ],
            [
                this.row + 2,
                this.col - 1,
            ],
            [
                this.row + 2,
                this.col + 1,
            ],
            [
                this.row + 1,
                this.col - 2,
            ],
            [
                this.row + 1,
                this.col + 2,
            ],
        ];
        moves.forEach(possibleMove => {
            // for each item in moves array check possible move coords are within boundaries
            if (isWithinBoard(...possibleMove)) {
                // then create new knight node, add these coordinates to it's row & col properties and add each knight node to result array
                result.push(new Knight(...possibleMove));
            }
        })
        return result;
    }    
}

// Generate board and assign co-ordinates to each square
function genBoard() {
    const container = document.querySelector('.container');
    const gameboard = document.createElement('div');
    const chessBoard = [];
    gameboard.classList.add('gameboard');
    for (let i = 8; i > 0; i--) { // ROW i.e nums
        // gen 8 row arrays each containing each coord in row
        const rowArray = [];
        let rowCoord = i;
        for (let j = 0; j < 8; j++) { // COL i.e. letters
            const colCoord = String.fromCharCode(65 + j); // convert to letters;
            const coordinate = `${rowCoord}${colCoord}`;
            const square = document.createElement('div');
            square.id = coordinate;
            square.textContent = coordinate;
            rowArray.push(coordinate);
            square.classList.add('square');
            gameboard.appendChild(square);

            if ((i + j) % 2 == 0) {
                square.classList.add('square-black');
            } else {
                square.classList.add('square-white');
            }
        }        
        chessBoard.push(rowArray); // access coords by [rowIndex][colIndex]
    }
    console.log(chessBoard);
    console.log(chessBoard[5][2]);
    container.appendChild(gameboard);
    return chessBoard;
}

function isWithinBoard(i, j) {
    return (i >= 0 && i <= 7 && j >= 0 && j <= 7);
}

// Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:
//   > knightMoves([3,3],[4,3])
//   => You made it in 3 moves!  Here's your path:
//     [3,3]
//     [4,5]
//     [2,4]
//     [4,3]

function knightMoves() {

}