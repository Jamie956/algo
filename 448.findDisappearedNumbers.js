/*
448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.


Given it a signal if you find it
num   [4, 3, 2, 7, 8, 2, 3, 1]
index [0, 1, 2, 3, 4, 5, 6, 7]

index include all num, give a signal to index
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