//https://leetcode.com/problems/number-of-islands/description/
function numIslands(grid: string[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let islands = 0
    const bfs = (i:number, j:number) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') return;
        grid[i][j] = '0';
        bfs(i + 1, j);
        bfs(i - 1, j)
        bfs(i, j - 1);
        bfs(i, j + 1);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                bfs(i, j);
                islands++;
            }
        }
    }

    return islands;
};

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]));
