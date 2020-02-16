/*
136. Single Number
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

var singleNumber = function (nums) {
  if (nums.length == 1) return nums[0];
  let ans;
  for (let num of nums) {
    ans ^= num;
  }
  return ans;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
/*
4 ^ 1 ^ 2 ^ 1 ^ 2 = 4
100 ^ 001 ^ 010 ^ 001 ^ 010

100
001
010
001
010
---
100
*/