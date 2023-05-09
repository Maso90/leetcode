function diagonalSum(mat: number[][]): number {
    let res = 0;
    const n = mat.length;
    let idx = n - 1;

    for(let i = 0; i < n; i++) {
        res += i === idx ? mat[i][i] : mat[i][i] + mat[i][idx];
        idx--;
    }
    return res;
};

console.log(diagonalSum([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));
