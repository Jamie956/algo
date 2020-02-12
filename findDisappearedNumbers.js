/*
448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
*/

/*
给出数组nums，长度为n，数组元素为整数，元素取值范围1<=nums[i]<=n，会有元素重复
在取值范围内，找出没有出现的整数，也就是出现过的需要做标记
如果不使用额外空间，只能在nums上做标记
[1,2,3,4,5]，为了方便看，假设nums有序，实际上是无序
[0,1,2,3,4]，对应的索引
nums[i]的值与index可以互相转换
所以读取元素nums[i]，nums[i]-1就是索引，把这个索引所在的值做标记，标记成负数，如果标记过就不用再标记了
这个标记的元素，说明他对应的某个值出现过，换算就是索引值+1=出现的整数
*/

var findDisappearedNumbers = function (nums) {
  let ans = [];
  for (let i in nums) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) nums[index] *= -1;
  }
  for (let i in nums) {
    if (nums[i] > 0) ans.push(Number(i) + 1);
  }
  return ans;
}
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));