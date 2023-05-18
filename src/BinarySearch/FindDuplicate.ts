// https://leetcode.com/problems/find-the-duplicate-number/description/
function findDuplicate(nums: number[]): number {
    let slow = 0;
    let fast = 0;
    do  {
        fast = nums[fast];
        fast = nums[fast];
        slow = nums[slow];
    } while (fast !== slow);
    fast = 0;
    while (fast !== slow) {
        fast = nums[fast];
        slow = nums[slow];
    }
    return fast;
};

// function findDuplicate(nums: number[]): number {
//     const set = new Set<number>()
//     for(const n of nums) {
//         if(set.has(n)) {
//             return n
//         }
//         set.add(n)
//     }
//     return 0
// };

console.log(findDuplicate([1,3,4,2,2]))
