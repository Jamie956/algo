/*
67. Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 or 0.
*/

var addBinary = function (a, b) {
  let ans = "";
  let carryBit = 0;
  //末尾开始遍历，每一位数转成数字相加，如果有进位要相加，可能是0+0,0+1,1+1（考虑有无进位）
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i-- , j--) {
    let sum = 0;
    sum += i >= 0 ? parseInt(a[i]) : 0;//索引有可能取负数
    sum += j >= 0 ? parseInt(b[j]) : 0;
    sum += carryBit;

    ans += sum % 2;//求余取模，0-0, 1-1, 2-0, 3-1
    carryBit = Math.floor(sum / 2);//进位, 0-0, 1-0, 2-1, 3-1
  }
  ans += carryBit == 1 ? carryBit : "";//补最后一个进位
  return ans.split('').reverse().join('');
};

let ret = addBinary("1010", "1011");
console.log(ret);


