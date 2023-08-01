// https://leetcode.com/problems/combinations/description/
function combine(n: number, k: number): number[][] {
    const ans: number[][] = [];
    const dfs = (i: number, cur: number[]) => {
        if(cur.length === k) {
            ans.push(cur.slice());
            return;
        }
        if(i > n) {
            return;
        }
        cur.push(i);
        dfs(i + 1, cur);
        cur.pop();
        dfs(i + 1, cur);
    }
    dfs(1, []);
    return ans;
}

console.log(combine(4, 2)) //[ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
console.log(combine(1, 1)) // [[1]]