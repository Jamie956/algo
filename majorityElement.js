/*
169. Majority Element
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

给出一个数组，长度为n，数组存在值相等的元素，这些元素出现次数大于n/2，求这个数

*/

var majorityElement2 = function (nums) {
  let map = new Map();
  for (let num of nums) {
    if (!map.has(num)) map.set(num, 0);
    let val = map.get(num) + 1;
    if (val > nums.length / 2) return num;
    map.set(num, val);
  }
}

// console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]));

/*
投票
遇到跟自己相同的加一票，遇到跟自己不相同的减一票，当票数为0时，重设候选人
最多票数的一定是出现次数最多的
*/
var majorityElement3 = function (nums) {
  let candidate;
  let vote = 0;
  for (let num of nums) {
    if (vote == 0) candidate = num;
    vote += (num == candidate) ? 1 : -1;
  }
  return candidate;
}

console.log(majorityElement3([6,5,5]));


