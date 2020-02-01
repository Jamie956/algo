

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 1) return 1;
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

let ans = climbStairs(4);
console.log(ans);
/*
1 2 3 4 5 6 7
1 2 3 5 8
*/