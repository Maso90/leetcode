function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const memo = Array(m).fill(null).map(() => Array(n).fill(-1));
    console.log(memo);
    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
             if(i > 0 && j > 0) {
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
             } else if(i > 0) {
                grid[i][j] += grid[i-1][j];
             } else if(j > 0) {
                grid[i][j] += grid[i][j-1];
             }
        }
    }
    return grid[m-1][n-1];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));