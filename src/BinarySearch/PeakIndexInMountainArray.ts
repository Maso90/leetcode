// https://leetcode.com/problems/peak-index-in-a-mountain-array/
function peakIndexInMountainArray(arr: number[]): number {
    let [start, end] = [0, arr.length - 1];
    while (start <= end) {
        const idx  = start + Math.round((end - start) / 2);
        if(start === end) {
            return idx;
        } else if (arr[idx] > arr[idx+1]) {
            end = idx;
        } else if (arr[idx] < arr[idx+1]) {
            start = idx + 1;
        }

    }
    return -1;
}

console.log(peakIndexInMountainArray([0,1,0])) // 1
console.log(peakIndexInMountainArray([0,2,1,0])) // 1
console.log(peakIndexInMountainArray([0,5,10,2])) // 2