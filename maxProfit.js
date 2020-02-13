/*
121. Best Time to Buy and Sell Stock

Say you have an array for which the i element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.

每天有3种动作：买、卖、什么都不做

dp[i][k][s]
i 天数
k 交易次数
s 状态, 手持股票=1, 还没买股票=0

罗列所有可能的情况，寻找最大值

for 0 <= i < n
  for 1 <= k < K
    for s in {0,1}
      dp[i][k][s] = max(buy, sell, rest)

base case
没买股票，一定是没有收支
dp[i][0][0]=0
dp[-1][k][0]=0
收上有股票时，交易次数不为0
dp[i][0][1]=null
天数不存在负数
dp[-1][k][1]=null

formula
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]) //max(rest, sell)
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]) //max(rest, buy)

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length == 0) return 0;
  
  let dp = [];
  dp[0] = [0, -prices[0]];

  for (let i = 1; i < prices.length; i++) {
    dp[i] = [Math.max(dp[i-1][0], dp[i-1][1]+prices[i]), Math.max(dp[i-1][1], -prices[i])];
  }

  return dp[prices.length-1][0];
};

console.log(maxProfit([7,1,5,3,6,4]));