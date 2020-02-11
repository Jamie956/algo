/*
38. Count and Say
Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  return recursion('1', 1, n);
};

function recursion(str, cur, n) {
  if (cur == n) return str;
  let count = 0;
  let prev = str.charAt(0);
  let ans = '';
  for (let i = 0; i <= str.length; i++) {
    if (prev == str.charAt(i)) {
      count++;
    } else {
      ans = ans + count + prev;
      count = 1;
      prev = str.charAt(i);
    }
  }
  return recursion(ans, cur + 1, n);
}

console.log(countAndSay(5));