function knightMoves(start, end){
    // define the size of the chessboard
    const boardSize = 8;

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

    // initialize the BFS queue and visited set
    const queue = [];
    const visited = new Set();
    queue.push({position: start, path: [start]});
    visited.add(JSON.stringify(start));

    while(queue.length > 0){
        const {position, path } = queue.shift();
        if(JSON.stringify(position) === JSON.stringify(end)){
            // target position found
            return `You made it in ${path.length - 1} moves! Here's your path:\n${path.map((square) => `[${square}]`).join("\n")}`;
        }

        const validMoves = getValidKnightMoves(position);

        for(const move of validMoves){
            if(!visited.has(JSON.stringify(move))){
                visited.add(JSON.stringify(move));
                queue.push({position: move, path: [...path, move] });
            }
        }
    }

    // if no path is found
    return "No valid path found."
}

// example usage
const start = [3,3]
const end = [4,3]
console.log(knightMoves(start, end))