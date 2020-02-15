/*
283. Move Zeroes
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

把数组的全部0移到末尾
当前元素不为0时，看看这个元素前面是否出现过0，如果出现过就移动，然后把这个元素就变为0
*/

var moveZeroes = function (nums) {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) zeroCount++;
    if (nums[i] != 0 && zeroCount > 0) {
      nums[i - zeroCount] = nums[i];
      nums[i] = 0;
    }
  }
};

let nums;
nums = [0, 1, 0, 3, 12];
// nums = [1];
// nums = [1,0];
moveZeroes(nums);
console.log(nums);