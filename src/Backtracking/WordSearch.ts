// https://leetcode.com/problems/word-search/
function exist(board: string[][], word: string): boolean {
    const [m, n, w] = [board.length, board[0].length, word.length];
    let ans = false;
    const bfs = (idx: number, i: number, j: number): void => {
        if(idx === w) {
            ans = true;
            return;
        } 
        if(i < 0 || i >= m || j < 0 || j >=n || board[i][j] !== word[idx]) {
            return;
        } 
        
        const pre = board[i][j]
        board[i][j] = '*';
        
        bfs(idx+1, i-1, j);
        bfs(idx+1, i+1, j);
        bfs(idx+1, i, j-1);
        bfs(idx+1, i, j+1);
        
        board[i][j] = pre;
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            bfs(0, i, j);
            if(ans) {
                return true;
            }
        }
    }

    return ans;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB')); // false
