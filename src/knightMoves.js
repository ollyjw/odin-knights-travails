import { genBoard, displayBoard } from './board';

export const board = genBoard();
displayBoard();

export class Knight {
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
export function knightMoves(currentLocation, destination) {    
    // Create queue that will keep track of what nodes need to be searched
    const queueArray = [];
    const levelOrderArray = [];    
    // set first el to knight node's given current location
    queueArray.push(new Knight(...currentLocation));

    // create a while loop that will run as long as the queue is not empty. In other words, it will run as long we still have nodes to traverse.
    // while the currentLocation & destination coords aren't equal - queueArray items are knights, destin items will be xy coords
    while ((queueArray[0].row !== destination[0]) || (queueArray[0].col !== destination[1])) {
        //we need to remove the first knight node in the queue and store in 'currentKnight'
        const currentKnight = queueArray.shift();
        // Store knight's possible moves in var
        const possibleMoves = currentKnight.getPossibleMoves(); // 8 poss knight objs
        
        // Take the current knight, loop through all possible moves on the board it can make and add parent prop to it's children - as new current knights are created from possibles moves they will be assigned parent prop linking to their parent's coords
        possibleMoves.forEach(possibleMove => {
            possibleMove.parent = currentKnight;
        })

        // Add possible moves (knight objs) to queue
        queueArray.push(...possibleMoves);
        
        // we need to make sure the current node is not null - If the node is null, we know we've reached the end of a branch
        if (currentKnight === null) continue;
            // (continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration).
    } 

    // Remove & store first el from queue array (should be destination)
    let knightDestination = queueArray.shift();
    //console.log(knightDestination);
    let counter = 0;
    // While knights have a parent property (currentLocation input at end of queue will not have a parent prop)
    while(knightDestination.parent) {
        // add knights props to front of LO array
        levelOrderArray.unshift([knightDestination.row, knightDestination.col]);
        // Assign each knight the values of it's parent property
        knightDestination = knightDestination.parent;
        //console.log(`LO ARRAY: ${levelOrderArray}`);
        counter ++;
    }
    // add knights props to array outside of loop to return currentLocation coords
    levelOrderArray.unshift([knightDestination.row, knightDestination.col]);

    console.log("LO array is:");
    console.log(levelOrderArray);    
    levelOrderArray.forEach(row => console.log(row.join(',')));

    const result = `You made it in ${counter} moves! Knight moves from ${currentLocation}(${currentLocation[0] + 1}${String.fromCharCode(65 + currentLocation[1])}) to ${destination}(${destination[0] + 1}${String.fromCharCode(65 + destination[1])}) will be: ${levelOrderArray}`;

    return result;
}