// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
function search2(nums: number[], target: number): boolean {
    const pivot = findPivot(nums, target);
    const n = nums.length;
    let left = 0;
    let right = nums.length - 1;
    if (nums[left] === nums[right]) {
        return nums.includes(target);
    }

    if (nums[pivot] === target) {
        return true;
    }

    if (pivot === 0) {
        return binarySearch(nums, target, 0, n - 1);
    }

    if (target < nums[0]) {
        return binarySearch(nums, target, pivot, n - 1);
    }

    if (target > nums[0]) {
        return binarySearch(nums, target, 0, pivot);
    }

    return true
};

function findPivot(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const pivot = Math.floor((left + right) / 2);

        if (nums[pivot] > nums[pivot + 1]) {
            return pivot + 1;
        } else if (nums[pivot] < nums[left]) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }

    return 0;
};

function binarySearch(nums: number[], target: number, left: number, right: number): boolean {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (target < nums[mid]) {
            right = mid - 1;
        } else if (target > nums[mid]){
            left = mid + 1;
        } else {
            return true;
        }
    }

    return false;
}

console.log(search2([2,5,6,0,0,1,2], 0)) // true
console.log(search2([2,5,6,0,0,1,2], 3)) // false
