import { knightMoves } from "./knightMoves";
import { board, displayBoard } from './board';


const DisplayController = (() => {
    let start = null;
    let destination = null;
    let knightMovesResult = null;
    displayBoard();
    
    const squares = document.querySelectorAll(".square");
    // Click on board twice, once for starting location, another for destination. First click adds start class to square
    squares.forEach(square => {
        square.addEventListener('click', (e) => {
            const position = e.target.getAttribute("id");
            // if start doesnt exist assign clicked square id value to it
            if (!start) {
                start = position;
                square.classList.add("start");
            } else if (!destination) {  // if dest doesnt exist assign clicked square id value to it
                destination = position;
                square.classList.add("destination");
            }
            if (start && destination && !knightMovesResult) { // if start & dest exist but knightmoves still null
                const startArray = parseCoords(start);
                const destArray = parseCoords(destination);

                console.log(`start position is: ${start} (${parseCoords(start)})`);
                console.log(`end position is: ${destination} (${parseCoords(destination)})`);

                knightMovesResult = knightMoves(startArray, destArray);
                drawPath(knightMovesResult);
            }
        })
    })

    // takes input square id e.g '8A' - returns array which reflects chessboard array indeces i.e. '[7,0]'
    function parseCoords(sqr) {
        const row = parseInt(sqr.charAt(0)) -1;
        const col = sqr.charCodeAt(1) - 65;
        return [row, col];
    }

    // Add number of moves to each coord on board
    function drawPath(knightMovesResult) {
        let moveCounter = 0;
        // for every item in LO array from knightMoves function
        for (let knightMove of knightMovesResult) {
            const boardCoord = board[knightMove[0]][knightMove[1]];
            const square = document.getElementById(boardCoord);
            if (moveCounter !== 0) {
                square.textContent = moveCounter;
            }
            moveCounter++;
        }
    }

})();

export { DisplayController };