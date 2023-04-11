// https://leetcode.com/problems/search-a-2d-matrix/
function searchMatrix(matrix: number[][], target: number): boolean {
    let start = 0;
    let end = matrix.length - 1;
    while(start <= end) {
        const m = Math.round((start + end) / 2);
        const s = matrix[m][0];
        const e = matrix[m][matrix[m].length - 1];
        if (s > target) {
            end = m - 1;
        } else if (e < target) {
            start = m + 1;
        } else {
            return binarySearch(matrix[m], target)
        }
    }
    return false;
};

function binarySearch(nums: number[], target: number): boolean {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const m = Math.round((start + end) / 2);
        if (nums[m] > target) {
            end = m - 1;
        } else if (nums[m] < target) {
            start = m + 1;
        } else {
            return true;
        }
    }
    return false;
};


console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)) //false