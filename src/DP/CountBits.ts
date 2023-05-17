// https://leetcode.com/problems/counting-bits/description/
function countBits(n: number): number[] {
    let res = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
        if(i % 2 === 0) {
            res[i] = res[i / 2];
        } else {
            res[i] = res[i - 1] + 1;
        }
    }
    return res.slice(0, n + 1);
};

// function countBits(n: number): number[] {
//     const res= []
//     for (let i = 0;i<=n;i++) {
//         let x = i
//         let cnt =0
//         while(x!=0) {
//             cnt++;
//             x = x & (x-1)
            
//         }
//         res.push(cnt)
//     }
//     return res
// };

console.log(countBits(0));
console.log(countBits(1));
console.log(countBits(2));
console.log(countBits(5));
