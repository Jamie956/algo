/*
66. Plus One
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

给出一个非空数组，元素组成一个非负整数，给这个整数加1，求加1后的数组
加1从数组末尾加，如果 当前元素 digits[i]%10==0，说明需要进位，进位后再到下位，看是否需要再进位，如此类推
如果没有进位，返回结果

*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i=digits.length-1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if(digits[i] != 0) return digits;
  }
  digits.length++;
  digits[digits.length-1] = 0;
  digits[0]=1;
  return digits;
};

console.log(plusOne([9,9,9]));