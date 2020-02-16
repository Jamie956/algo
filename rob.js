/*
198. House Robber
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

给出一个数组，求这个数组的元素最大和，但元素之间不能相连

f(n)=前n个房间抢到到最大金额，Ai=第i个房间第钱
n=1, f(n)=A1
n=2, f(n)=max(A1,A2)
n=3, f(n)=max(f(n-2)+Ai,f(n-1))
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);

  let max = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    max[i] = Math.max(max[i - 2] + nums[i], max[i - 1]);
  }
  return max.pop();
};

// [1,2,3,1]
// []
// 0
console.log(rob([0]));
