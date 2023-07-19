// https://leetcode.com/problems/non-overlapping-intervals/
function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[0] - b[0]);
    let result  = 0;
    let [s, e] = intervals[0];
    for (let i = 1; i  < intervals.length; i++) {
        const [start, end] = intervals[i];
        if( start < e) {
            if (e > end) {
                s = start;
                e = end;
            }
            result++;
        } else {
            s = start;
            e = end;
        }
    }
    return result;
}

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // 2