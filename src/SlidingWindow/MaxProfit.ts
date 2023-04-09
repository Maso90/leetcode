function maxProfit(prices: number[]): number {
    let L = 0;
    let R = prices.length - 1;
    let max = 0;

    while(R < prices.length) {
        if(prices[L] < prices[R]) {
            if(prices[R] - prices[L] > max) {
                max = prices[R] - prices[L];
            }
        } else {
            L = R;
        }
        R++;
    }
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]))