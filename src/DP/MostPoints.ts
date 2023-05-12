function mostPoints(questions: number[][]): number {
    const n = questions.length;
    const dp = Array(n).fill(0);
    dp[n - 1] = questions[n - 1][0];

    for (let i = n - 2; i >= 0; i--) {
        const [points, brainpower] = questions[i];
        const nextUnskippedInd = i + brainpower + 1;
        if (nextUnskippedInd >= n) {
            dp[i] = points;
        } else {
            dp[i] = points + dp[nextUnskippedInd];
        }

        dp[i] = Math.max(dp[i], dp[i + 1]);
    }

    return dp[0];
};
console.log(mostPoints([[1,1],[2,2],[3,3],[4,4],[5,5]]));
