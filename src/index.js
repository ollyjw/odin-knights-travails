// import './chess-knight.png';
import './styles.css';
import { knightMoves } from './knightMoves';

// A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. Its basic move is two steps forward and one step to the side.

// Determine the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way

// Assign co-ordinates to each square
// Knight also has current coordinates plus array of (max 8) possible destinations
// Compare knight's coordinates to each square

//Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.

// Use Breadth first search - the chessboard is most accurately represented as a 64-node graph. It's not really a tree since there are multiple ways to reach any particular node.


// const testKnight = new Knight(3,3); //5D
// console.log(testKnight);
// console.log(testKnight.getPossibleMoves());

console.log(`Knight moves from 5D to 4D will be: ${knightMoves([3,3],[4,3])}`);