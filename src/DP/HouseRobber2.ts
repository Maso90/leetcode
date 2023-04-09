function rob2(nums: number[]): number {
    const len = nums.length;
    if (len === 1) {
        return nums[0];
    }

    return Math.max(robHelper(nums, 0, len - 2), robHelper(nums, 1, len - 1));
}

function robHelper(nums: number[], start: number, end: number): number {
    const dp: number[] = [];
    dp[start] = nums[start];
    dp[start + 1] = Math.max(nums[start], nums[start + 1]);

    for (let i = start + 2; i <= end; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[end];
};

