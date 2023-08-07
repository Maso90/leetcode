function convertToTitle(columnNumber: number): string {
    let ans = '';

    while(columnNumber > 0) {
        const n = (columnNumber - 1) % 26;
        ans = numberToString(n) + ans;
        columnNumber = Math.floor((columnNumber - n) / 26);
    }
    return ans;
}

const numberToString = (n: number): string =>  String.fromCharCode( n+ 65);

console.log(convertToTitle(1))
console.log(convertToTitle(28))
console.log(convertToTitle(701))