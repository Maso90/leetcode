function search(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const m = Math.round((start + end) / 2);
        if (nums[m] > target) {
            end = m - 1;
        } else if (nums[m] < target) {
            start = m + 1;
        } else {
            return m;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))