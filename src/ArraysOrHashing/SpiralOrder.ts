// https://leetcode.com/problems/spiral-matrix/description/
function spiralOrder(matrix: number[][]): number[] {
    const[m, n] = [matrix.length, matrix[0].length];
    let[x, y, idx] = [0, 0, 0];
    const direction: number[][] = [[0,1], [1,0], [0, -1], [-1, 0]];
    const res: number[] = [];
    while(res.length < m * n) {
        res.push(matrix[x][y]);
        matrix[x][y] = 101;
        let [dx, dy] = direction[idx];
        if(x+dx < 0 || x+dx >= m || y+dy < 0|| y+dy >= n || matrix[x+dx][y+dy] === 101) {
            idx = (idx + 1) % 4;
            [dx, dy] = direction[idx];
        }
        x += dx;
        y += dy;
    }
    return res;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
