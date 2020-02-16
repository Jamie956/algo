/*
28. Implement strStr()
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

给出字符haystack和needle，用needle在haystack中找有没跟needle一样的字符串，有的话就返回索引
用needle的第一个字符在haystack中找，如果找得到，截取haystack字符串，长度跟needle的一样
*/

var strStr = function (haystack, needle) {
  if (!needle) return 0;
  for (let i in haystack) {
    if ((haystack[i] == needle.charAt(0)) && (haystack.substr(i, needle.length) == needle)) return i;
  }
  return -1;
};

console.log(strStr('hello', 'll'));