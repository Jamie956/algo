/*
739. Daily Temperatures
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let stack = [];
  let ans = [];
  for (let i = T.length - 1; i >= 0; i--) {
    while (T[i] >= T[stack[stack.length - 1]]) {
      stack.pop();
    }
    ans[i] = (stack.length == 0) ? 0 : (stack[stack.length - 1] - i);
    stack.push(i);
  }
  return ans;
};

/*
从最后一位开始遍历数组T
如果当前T[i]>= T[j]（顶栈元素j），那么弹出顶栈元素，直到找到T[i]<T[j]
如果栈为空，说明不存在比T[i]大的温度，那么ans[i]=0
如果栈有值，距离升温的天数就 i与顶栈元素之差的绝对值，and[i]=|i-j|
i入栈
*/

console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]));//[8,1,5,4,3,2,1,1,0,0]