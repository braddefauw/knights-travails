# knights-travails

Solution to a "knight travails" problem in The Odin Project's Javascript Path.

A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns (don’t believe it? See this [animation](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/ruby_programming/computer_science/project_knights_travails/imgs/00.png)). Its basic move is two steps forward and one step to the side.

The task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

To solve this problem, we can use a graph traversal algorithm, such as Breadth-First Search (BFS), to find the shortest path for the knight on a chessboard.

For finding the shortest path for the knight to move from one square to another on a chessboard, a **breadth-first search (BFS)** algorithm is the most appropriate choice. BFS is a good fit for this problem for several reasons:

1. **Shortest Path**: BFS is designed to find the shortest path in an unweighted graph. In this case, we can treat the chessboard as a graph, where each square is a node, and valid knight moves create edges between nodes. BFS ensures that the first path found to the target square is the shortest one.
2. **Completeness**: BFS guarantees that it will find the shortest path if one exists, making it a complete algorithm for this problem.
3. **Optimality**: Given that knight moves have equal weight (each move has the same cost), BFS will find an optimal solution.
4. **Memory Efficiency**: BFS explores nodes level by level, which means it doesn't store all possible paths in memory simultaneously. This makes it memory-efficient for this problem, even for large chessboards.

In contrast, an **infinite series** or other algorithms like **depth-first search (DFS)** or A *search** are not as suitable for this problem. DFS can explore very deep paths before finding a solution, which may not be efficient for large chessboards. A* search is better suited for weighted graphs where edge costs vary, but in this case, knight moves are unweighted. An infinite series doesn't directly apply to finding paths on a chessboard, as it typically deals with mathematical series or sequences.