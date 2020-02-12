/*
581. Shortest Unsorted Continuous Subarray

Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
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

/*
给出一个整数数组，可能存在这样的一个连续数组，当给这个连续数组排序后，整数数组变成升序，求这个连续数组的长度
求长度也就是左右边界索引之差
使用双指针
左边界指针为l，右边界指针为r
l从数组末尾开始扫描，要找出左边边界，定义一个最小值min，如果nums[len-1-i]>min，说明不符合升序的规则，l指针=len-1-i，每个nums[i]都应该比之前的min小
r从数组开始扫描，要找右边边界，即读取的每一个num[i]要比上一个最大值max大，否则说明nums[i]是降序的，移动指针r=i
连续数组长度就是指针之差：r-l+1
*/

let nums;
// nums = [2, 6, 4, 8, 10, 9, 15];//5
// nums = [1,3,2,2,2];//4
// nums = [1,2,3,3,3];//0
nums = [-1, -1, -1, -1];//0

console.log(findUnsortedSubarray(nums));