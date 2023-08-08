// https://leetcode.com/problems/search-in-rotated-sorted-array/description/
function search(nums: number[], target: number): number {
    let [start, end] = [0, nums.length - 1];
    while (start <= end) {
        const m = Math.floor((start + end) / 2);
        if(nums[m] === target) {
            return m;
        }
        if (nums[start] <= nums[m]) {
            if (nums[start] <= target && target < nums[m]) {
                end = m - 1;
            } else {
                start = m + 1;
            }
        } else {
            if (nums[m] < target && target <= nums[end]) {
                start = m + 1;
            } else {
                end = m - 1;
            }
        }
    }
    return -1;
}

console.log(search([4,5,6,7,0,1,2], 0)) // 4
console.log(search([4,5,6,7,0,1,2], 3)) // -1
console.log(search([1], 0)) // -1