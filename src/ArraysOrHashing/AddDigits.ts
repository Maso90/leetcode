// https://leetcode.com/problems/add-digits/description/
function addDigits(num: number): number {
    let s = String(num);
    while(s.length > 1) {
        const n = s.split('').reduce((acc, cur) => acc + Number(cur), 0);
        s = String(n);
    }
    return Number(s);
};

console.log(addDigits(38)); // 2
console.log(addDigits(0)); // 2
