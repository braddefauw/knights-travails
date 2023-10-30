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

// function to check if a move is within the bounds of the chessboard 
function isValidMove(x, y){
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
}

// function to get all valid knight moves from a given position
function getValidKnightMoves(position){
    const moves = [
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
    ]

    const validMoves = [];

    for (const move of moves){
        const x = position[0] + move[0];
        const y = position[1] + move[1];
        if(isValidMove(x, y)){
            validMoves.push([x, y]);
        }
    }

    return validMoves;
}

// function to initialize a tree node
function initializeTree(){
    return {
        position: null,
        children: [],
    };
}

//function to build a tree of possible knight moves from initial to target position
function buildKnightMoveTree(initialPosition, targetPosition) {
    const tree = initializeTree();
    tree.position = initialPosition;

    const queue = [tree];

    while(queue.length > 0) {
        const node = queue.shift();
        const currentPosition = node.position;

        if (JSON.stringify(currentPosition) === JSON.stringify(targetPosition)){
            // target position found, exit the loop
            break;
        }

        const validMoves = getValidKnightMoves(currentPosition);

        for(const move of validMoves){
            const child = {
                position: move,
                children: [],
            };
            node.children.push(child);
            queue.push(child);
        }
    }

    return tree;
}

// example usage
const chessboard = initializeChessboard(boardSize);
const initialPosition = [0, 0]; // initial position of the knight
const targetPosition = [3,3];

const knight = initializeKnight(chessboard, initialPosition);
const moveTree = buildKnightMoveTree(initialPosition, targetPosition);

console.log("Chessboard:", chessboard)
console.log("Knight's Initial Position:", knight)
console.log("Move Tree:", moveTree)