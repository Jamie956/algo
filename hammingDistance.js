/*
461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let n = x ^ y;
  let count = 0;
  while (n != 0) {
    count++;
    n = n & (n - 1);
  }
  return count;
};

console.log(hammingDistance(6, 15));
/*
两个整数的二进制表示下，这两个数相对应的bits不相同（即1和0 或0和1）的有多少个
将两个数做异或运算，不相同的bits都会算出1，此外都是0，然后计算1的个数

异或运算
1, 4 => 2
0001 ^0100 = 0101
0, 4 => 1
0000 ^0100 = 0100
5, 13 => 1
0101 ^1101 = 1000
3, 6 => 2
0011 ^0110 = 0101
6, 15
0110 ^1111 = 1001

按位与运算
n & n-1，运算一次，减少低位一个1
n是1结尾，n-1必定是0结尾，而且其他位不变，因为只是减了1，末尾1 &0=0，相当于抹去了末尾的1
0101, 0100 => 0100
0011, 0010 => 0010
n是0结尾，n-1需要向高位借1，即最近的高位1变成0，所以是以1结尾，在没借到1所经过的位（0）都变成1，&后都变成0
0100, 0011 => 0000
0010, 0001 => 0000
1110, 1101 => 1100
*/
