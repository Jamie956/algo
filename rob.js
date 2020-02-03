/*
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
  //f(i) = max(f(i-2)+num[i], f(i-1))
  if (nums.length == 0) return 0;
  let max = [];
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      max[0] = nums[0];
      continue;
    }
    if (i == 1) {
      max[1] = Math.max(nums[0], nums[1]);
      continue;
    }
    max[i] = Math.max(max[i - 2] + nums[i], max[i - 1]);
  }
  return max[nums.length - 1];
};

let nums = [1, 10, 1, 2];
let ans = rob(nums);
console.log(ans);
