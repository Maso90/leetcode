// https://leetcode.com/problems/powx-n/
// recursion
function myPow(x: number, n: number): number {
    if(n == 0) return 1;
    if(x == 0 || x == 1 || n == 1) return x;
    if(n < 0){
        return 1/x * myPow(1/x, -(n+1));
    }
    return n % 2 == 0 ? myPow(x * x, Math.floor(n / 2)) : x * myPow(x * x, Math.floor(n / 2));
}

// function myPow(x: number, n: number): number {
//     let ans = 1;
//     if (n === 0 || x === 1 || (x === -1 && n % 2 === 0 )) {
//         return 1;
//     } else if(x === -1 && n % 2 === 1) {
//         return -1;
//     } else {
//         for(let i = 0; i < Math.abs(n); i++) {
//             ans *= x;
//         }
//     }
//     if (n < 0) ans = 1 / ans;
//     return ans;
// }


console.log(myPow(2, 10));
console.log(myPow(2, -2));
console.log(myPow(2.1, 3));