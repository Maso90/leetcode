// Stack + Backtaracking
function generateParenthesis(n: number): string[] {
    const res: string[] = [];
    const stack: string[] = [];

    const backtrack = (open: number, close: number) => {
        if(open === n && close === n) {
            res.push(stack.join(''));
            return;
        }

        if(open < n) {
            stack.push('(');
            backtrack(open+1, close);
            stack.pop();
        }
        
        if(close < open) {
            stack.push(')');
            backtrack(open, close + 1)
            stack.pop();
        }
    }

    backtrack(0, 0)
    return res;
};

console.log(generateParenthesis(3));