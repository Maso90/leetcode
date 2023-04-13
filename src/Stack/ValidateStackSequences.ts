// https://leetcode.com/problems/validate-stack-sequences/description/
function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack: number[] = [];
    const l = pushed.length;
    let i: number = 0;
    let j: number = 0;
    while(j < l && i <= l) {
        if(popped[j] === stack[stack.length-1]) {
            stack.pop();
            j++
        } else if(i === l) {
            return false;
        } else {
            stack.push(pushed[i]);
            i++
        }
    }
    return true;
};

console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2])); //false
