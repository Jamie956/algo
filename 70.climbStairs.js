/*
70. Climbing Stairs
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

爬1级楼梯，有1种方式，1
爬2级楼梯，有2种方式，1+1、2
爬3级楼梯，有3种方式，1+1+1、2+1、1+2
爬4级楼梯，有5种方式，1+1+1+1、2+2、2+1+1、1+2+1、1+1+2
爬5级楼梯，有8种方式，1+1+1+1+1、2+2+1、1+2+2、2+1+2、2+1+1+1、1+2+1+1、1+1+2+1、1+1+1+2

设n为阶级数，N为方式数，得到f(n)=N
n=1, f(n)=N=1
n=2, f(n)=N=2
n=3, f(n)=N=3
n>3, f(n)=N=f(n-1)+f(n-2)
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 4) return n;
  let dp = [undefined, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

let ans = climbStairs(4);
console.log(ans);
