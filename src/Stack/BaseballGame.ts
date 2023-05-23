// https://leetcode.com/problems/baseball-game/description/
function calPoints(operations: string[]): number {
    const stack: number[] = [];
    for(const op of operations) {
        if(op === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else if(op === 'C') {
            stack.pop();
        } else if(op === 'D') {
            stack.push(stack[stack.length - 1] * 2);
        } else {
            stack.push(Number(op));
        }
    }
    return stack.reduce((acc, cur) => acc + cur, 0);
};

console.log(calPoints(["5","2","C","D","+"]));
