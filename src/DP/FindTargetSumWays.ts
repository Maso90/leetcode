// dfs + backtracking
function findTargetSumWays(nums: number[], target: number): number {
    const cache = new Map();
    const backTrack = (i: number, sum: number) => {
        if (i === nums.length) {
            if (sum === target) {
                return 1;
            }
            return 0;
        }
        if (cache.has(`${i},${sum}`)) {
            return cache.get(`${i},${sum}`);
        }
        cache.set(
            `${i},${sum}`,
            backTrack(i + 1, sum + nums[i]) + backTrack(i + 1, sum - nums[i])
        );
        return cache.get(`${i},${sum}`);
    };
    return backTrack(0, 0);
};

console.log(findTargetSumWays([1,1,1,1,1], 3))