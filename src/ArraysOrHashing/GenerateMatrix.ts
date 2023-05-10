// https://leetcode.com/problems/spiral-matrix-ii/description/
function generateMatrix(n: number): number[][] {
    const res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const direction: number[][] = [[0,1], [1,0], [0, -1], [-1, 0]];
    let[x, y, m, d]: number[] = [0, 0, 0, 0];
    while(m < n * n) {
        ++m;
        res[x][y] = m;
        let [dx, dy] = direction[d];
        if(x+dx < 0 || x+dx >= n || y+dy < 0|| y+dy >= n || res[x+dx][y+dy] > 0) {
            d = (d + 1) % 4;
            [dx, dy] = direction[d];
        }
        x += dx;
        y += dy;
    }
    return res;
};

console.log(generateMatrix(3)); //[[1,2,3],[8,9,4],[7,6,5]]
console.log(generateMatrix(1)); //[[1]]
