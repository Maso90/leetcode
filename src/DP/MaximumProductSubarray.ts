function maxProduct(nums: number[]): number {
    let res = Math.max(...nums);
    let curMax = 1;
    let curMin = 1;
    for (const n of nums) {
        if (n === 0) {
            curMin = 1;
            curMax = 1;
            continue;
        }

        let temp = curMax * n;
        curMax = Math.max(n * curMax, n * curMin, n);
        curMin = Math.min(temp, n * curMin, n);
        res = Math.max(res, curMax);
        console.log(curMax, curMin, res)
    }
    return res;
};

console.log(maxProduct([2,3,-2,4]));
//console.log(maxProduct([-2]));