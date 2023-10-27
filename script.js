// define the size of the chessboard
const boardSize = 8;

// create an empty chessboard as a 2D array
function createEmptyBoard(size){
    const board = [];
    for(let i = 0; i < size; i++){
        board.push(Array(size).fill(0))
    }
    return board
}

// function to initialize the chessboard
function initializeChessboard(size){
    const board = createEmptyBoard(size);
    return board;
}

// function to initialize the knight
function initializeKnight(board, position){
    const knight = {
        board: board,
        position: position,
    };
    return knight;
}

// example usage
const chessboard = initializeChessboard(boardSize);
const initialPosition = [0, 0]; // initial position of the knight
const knight = initializeKnight(chessboard, initialPosition);

console.log("Chessboard:", chessboard)
console.log("Knight's Initial Position:", knight)