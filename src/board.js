export const board = genBoard();

// Generate board and assign co-ordinates to each square
export function genBoard() {
    const chessBoard = [];    
    for (let i = 0; i < 8; i++) { // ROW i.e nums
        // gen 8 row arrays each containing each coord in row
        const rowArray = [];
        let rowCoord = i + 1;
        for (let j = 0; j < 8; j++) { // COL i.e. letters
            const colCoord = String.fromCharCode(65 + j); // convert to letters;
            const coordinate = `${rowCoord}${colCoord}`;            
            rowArray.push(coordinate);           
        }
        chessBoard.push(rowArray); // access coords by [rowIndex][colIndex]
    }
    console.log("chessboard array is:");
    console.log(chessBoard);
    console.log(`Row index 0 & col index 0 is: ${chessBoard[0][0]}, Row 7 & col 7 is: ${chessBoard[7][7]}`);
    return chessBoard;
}

export function displayBoard() {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');
    
    for (let i = board.length - 1; i >= 0; i--) { // ROW i.e nums
        const row = board[i];
        //console.log(row);
        let rowCoord = i + 1;
        for (let j = 0; j < row.length; j++) {             
            const colCoord = String.fromCharCode(65 + j); // convert to letters;
            const coordinate = `${rowCoord}${colCoord}`;
            if (j === 0) {
                const rowLegend = document.createElement("div");                
                rowLegend.classList.add("legend", "row");
                rowLegend.textContent = i + 1;
                gameboard.append(rowLegend);
            }
            const square = document.createElement('div');
            square.id = coordinate;
            square.classList.add('square');
            gameboard.appendChild(square);
            if ((i + j) % 2 == 0) {
                square.classList.add('square-black');
            } else {
                square.classList.add('square-white');
            }            
        }
    }
    for (let i = 0; i < 9; i++) {
        const colLegend = document.createElement("div");
        colLegend.classList.add("legend", "col");
        colLegend.textContent = String.fromCharCode(64 + i);
        if (i === 0) {
            colLegend.textContent = "";
        }
        gameboard.append(colLegend);
    }
    container.appendChild(gameboard);
}