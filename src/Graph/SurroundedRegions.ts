//https://leetcode.com/problems/surrounded-regions/
function solve(board: string[][]): string[][] {
    const [m, n] = [board.length, board[0].length];
    
    const bfs = (i:number, j:number) => {
        if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== 'O') return;
        board[i][j] = 'A';
        bfs(i + 1, j);
        bfs(i - 1, j)
        bfs(i, j - 1);
        bfs(i, j + 1);
    }

    // 테두리 먼저 확인 하여 "O"영역 발견하면 "A"로 마킹
    for (let i = 0; i < m; i++) {
        bfs(i, 0);
        bfs(i, n-1);
    }
    for (let i = 0; i < n; i++) {
        bfs(0, i);
        bfs(m-1, i);
    }
    
    // O -> X, A -> 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(board[i][j] == 'O') {
                board[i][j] = 'X';
            } else if(board[i][j] == 'A') {
                board[i][j] = 'O';
            }
        }
    }
    
    return board;
};

console.log(solve([
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]
]));
