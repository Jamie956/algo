/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.

between same open brackets and closed, there inner is empty
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = new Map().set('(', ')').set('[', ']').set('{', '}');
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s.charAt(i))) {
      stack.push(s.charAt(i));
      continue;
    }
    if (s.charAt(i) == map.get(stack[stack.length - 1])) {
      stack.pop();
      continue;
    }
    return false;
  }
  return stack.length == 0 ? true : false;
};

let ans = isValid('()');
console.log(ans);

