/*
581. Shortest Unsorted Continuous Subarray
Given an integer array, you need to find one continuous subarray 
that if you only sort this subarray in ascending order, 
then the whole array will be sorted in ascending order, too.


Those increasing elements of array, every num[i] < num[i+1], otherwise num[i]>num[i+1]
Two cursor to find left and right border, left cursor from end, rigth cursor from start
left cursor find num[i] > min that in the right
right cursor find num[i] < max that in the left
the answer length of the continous subarray r-l+1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  let l = r = 0, max = nums[0], min = nums[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    let start = i, end = nums.length - 1 - i;
    nums[end] <= min ? min = nums[end] : l = end;
    max <= nums[start] ? max = nums[start] : r = start;
  }
  return r > l ? r - l + 1 : 0;
};

let nums;
// nums = [2, 6, 4, 8, 10, 9, 15];//5
// nums = [1,3,2,2,2];//4
// nums = [1,2,3,3,3];//0
nums = [-1, -1, -1, -1];//0

console.log(findUnsortedSubarray(nums));