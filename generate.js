/*
118. Pascal's Triangle
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

给出一个非负整数，生成三角，到numRows行结束
numRows=0, []
numRows=1, [1]
numRows=2, [[1], [1,1]]
numRows=3, [[1], [1,1], [1,2,1]]
numRows=4, [[1], [1,1], [1,2,1], [1,3,3,1]]

121
0+1,1+2,2+1,1+0
根据上一行的左右上元素相加
*/

var generate = function (numRows) {
  if (numRows == 0) return [];
  if (numRows == 1) return [[1]];
  let rows = [[1]];
  for (let i = 1; i < numRows; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row.push(rows[i - 1][j - 1] + rows[i - 1][j]);
    }
    row.push(1);
    rows.push(row);
  }
  return rows;
};

console.log(generate(5));