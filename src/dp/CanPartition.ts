function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((s, c) => s + c, 0);
    if(sum % 2) return false;
    const half = sum / 2;
    const arr = [true, ...new Array(half).fill(false)];
    for(const e of nums){
        for (let i = half; i >= e; i--) {
            arr[i] = arr[i] || arr[i - e];
        }
        if(arr[half]) return true;
    }
    return false;
};

console.log(canPartition([1, 5, 11, 5]))