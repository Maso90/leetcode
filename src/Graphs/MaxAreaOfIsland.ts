// https://leetcode.com/problems/max-area-of-island/
function maxAreaOfIsland(grid: number[][]): number {
    let max = 0;
    const [m, n] = [grid.length, grid[0].length];

    const bfs = (i: number, j: number): number => {
        if(i >= m || i < 0 || j >= n || j < 0 || grid[i][j] === 0) return 0;
        grid[i][j] = 0;
        return 1 + bfs(i+1, j) + bfs(i-1, j)+ bfs(i, j+1) + bfs(i, j - 1);
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 1) {
                max = Math.max(max, bfs(i, j));
            }
        }
    }

    return max;
};

console.log(maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
]));
