//https://leetcode.com/problems/minimum-speed-to-arrive-on-time/
function minSpeedOnTime(dist: number[], hour: number): number {
    if (hour <= dist.length -1) return -1

    let low = 1;
    let high = 10 ** 7;

    while (low < high){
        let mid = Math.floor((low+high)/2);
        let temp = hourCounter(dist,mid);
        if (temp > hour){
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};

function hourCounter(arr: number[], speed:number){
    let res = 0;
    for (let i = 0; i<arr.length; i++){
        res += i === arr.length - 1? arr[i]/speed : Math.ceil(arr[i]/speed);
    }
    return res
}

console.log(minSpeedOnTime([1,3,2], 6)) // 1
console.log(minSpeedOnTime([1,3,2], 2.7)) // 3