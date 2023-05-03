function arraySign(nums: number[]): number {
    let res = 1;
    for(const num of nums) {
        if(num < 0) {
            res *= -1;
        } else if(num === 0) {
            return 0;
        }
    }
    return res;
};
console.log(arraySign([-1,-2,-3,-4,3,2,1]));
