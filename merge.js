/*
88. Merge Sorted Array
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

给出两个有序递增数组nums1和nums2，合并数组num2到nums1，合并后的数组是有序递增数组
两个数组，双指针，p1为nums1的指针，p2为nums2的指针
从数组末尾往前遍历，比较nums1和nums2的元素，谁的元素大，就放到nums1末尾，移动p指针
*/

var merge = function(nums1, m, nums2, n) {
  let p1 = m-1;
  let p2 = n-1;
  let p = m+n-1;
  while(p2>=0){
    nums1[p1]>nums2[p2] ? nums1[p--]=nums1[p1--] : nums1[p--]=nums2[p2--];
  }
}
// let nums1 = [1,2,3,0,0,0];
// let m = 3;
// let nums2 = [2,5,6];
// let n = 3;

let nums1 = [4,5,6,0,0,0];
let m = 3;
let nums2 = [1,2,3];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);