function climbStairs(n: number): number {
    if(n == 1) {
        return 1;
    } else if(n == 2) {
        return 2;
    } else {
        const memo = new Array<number>(n);
        memo[0] = 1;
        memo[1] = 2;
        for (let i = 2; i < n; i++) {
            memo[i] = memo[i-1] + memo[i-2];
        }
        return memo[n - 1];
    }
};

climbStairs(3);