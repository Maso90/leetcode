// https://leetcode.com/problems/last-stone-weight/description/
function lastStoneWeight(stones: number[]): number {
    while(stones.length > 1) {
        stones.sort((a,b) => a - b);
        const [x, y] = [stones.pop(), stones.pop()] as number[]
        if(x - y > 0) {
            stones.push(x - y);
        }
    }
    return stones[0] || 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1])); // 1
console.log(lastStoneWeight([2,2])); // 0
