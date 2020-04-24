/*
38. Count and Say
Given an integer n where 1 ≤ n ≤ 30, generate the n th term of the count-and-say sequence.

1.     1
2.     11
3.     21
4.     1211
5.     111221

n=5
the 1 th row must be 1
2 of row generate 11 from 1, mean that count+number
3 of row, 11->21, read the first number 1, 
  recording count 1, then reading next number 1, it alse is 1, account++
  account=2, number=1, result->21

*/

var countAndSay = function (n) {
  return recursion('1', 1, n);
};

function recursion(str, cur, n) {
  if (cur == n) return str;
  let count = 0;
  let prev = str[0];
  let ans = '';
  for (let i = 0; i <= str.length; i++) {
    if (prev == str[i]) {
      count++;
    } else {
      ans = ans + count + prev;
      count = 1;
      prev = str[i];
    }
  }
  return recursion(ans, cur + 1, n);
}

console.log(countAndSay(5));