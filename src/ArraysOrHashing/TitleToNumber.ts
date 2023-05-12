function titleToNumber(columnTitle: string): number {
    let res = 0;
    const l = columnTitle.length;
    for(let i = l - 1; i >= 0 ; --i) {
        res += (columnTitle.charCodeAt(i) - 64) *  (26 ** (l - i - 1) );
    }
    return res;
};

console.log(titleToNumber('ZY'));
