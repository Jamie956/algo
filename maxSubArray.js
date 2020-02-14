/*
53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

给出一个整数数组，找出这样一个连续的子数组，它的各个元素和是最大的，求它的和

计算一个连续子数组的和，如果当前元素加上他们的和反而变小了，那就让当前元素算作下一个连续数组
在这些之中找出最大值
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let max = nums[0];
  for (let num of nums) {
    sum = Math.max(num, sum + num);
    max = Math.max(sum, max);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
