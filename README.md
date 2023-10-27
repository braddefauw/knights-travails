# knights-travails

Solution to a "knight travails" problem in The Odin Project's Javascript Path.

A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns (don’t believe it? See this [animation](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/ruby_programming/computer_science/project_knights_travails/imgs/00.png)). Its basic move is two steps forward and one step to the side.

The task is to build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

To solve this problem, we can use a graph traversal algorithm, such as Breadth-First Search (BFS), to find the shortest path for the knight on a chessboard.