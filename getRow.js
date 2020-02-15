/*
119. Pascal's Triangle II

Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
Note that the row index starts from 0.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

求三角的第x行
数组补零，当前元素与下一个元素相加
*/

var getRow = function (rowIndex) {
  let row = [1];
  for (let i = 1; i < rowIndex + 1; i++) {
    row.unshift(0);
    for (let j = 0; j < i; j++) {
      row[j] = row[j] + row[j + 1];
    }
  }
  return row;
};

console.log(getRow(4));