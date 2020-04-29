/*
118. Pascal's Triangle
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

numRows=0, []
numRows=1, [1]
numRows=2, [[1], [1,1]]
numRows=3, [[1], [1,1], [1,2,1]]
numRows=4, [[1], [1,1], [1,2,1], [1,3,3,1]]

1210
0121
0+1,1+2,2+1,1+0

*/

let generate = function (numRows) {
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