// https://leetcode.com/problems/predict-the-winner/submissions/1005769043/
// use DP
function PredictTheWinner(nums: number[]): boolean {
    const n:number = nums.length;
    const dp: number[][] = new Array(n).fill(0).map(() => Array(n).fill(null));
    const maxDiff = (left: number, right: number) => {
        if (left == right) return nums[left];
        if (dp[left][right] !== null) return dp[left][right];

        const scoreByLeft = nums[left] - maxDiff(left + 1, right);
        const scoreByRight = nums[right] - maxDiff(left, right - 1);

        return (dp[left][right] = Math.max(scoreByLeft, scoreByRight));
    };

    return maxDiff(0, nums.length - 1) >= 0;
}

// use recursion
/*
function PredictTheWinner(nums: number[]): boolean {
    return maxDiff(nums,0, nums.length - 1, nums.length) >= 0;
}

const maxDiff = (nums: number[], left: number, right: number, n: number): number => {
    if (left === right) {
        return nums[left];
    }
    const scoreByLeft = nums[left] - maxDiff(nums, left + 1, right, n);
    const scoreByRight = nums[right] - maxDiff(nums, left, right - 1, n);

    return Math.max(scoreByLeft, scoreByRight);
}
 */