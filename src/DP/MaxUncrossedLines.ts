function maxUncrossedLines (nums1: number[], nums2: number[]): number {
  const [m, n] = [nums1.length, nums2.length];
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      if (nums1[row] === nums2[col]) {
        dp[row][col] = dp[row + 1][col + 1] + 1;
      } else {
        dp[row][col] = Math.max(dp[row + 1][col], dp[row][col + 1]);
      }
    }
  }
  return dp[0][0];
};