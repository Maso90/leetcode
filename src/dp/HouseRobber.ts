function rob(nums: number[]): number {
    let far = 0;
    let closer = 0;
    for(const n of nums) {
        const temp = far;
        far = Math.max(far, closer);
        closer = n + temp;
        console.log(n, far, closer);
    }
    return Math.max(far, closer);
};

rob([1,2,3,1]);