/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.
 * If the last word does not exist, return 0.
 * 
 * case:
 * s="aaa"
 * s="a b c"
 * s=""
 * s="a"
 * s="a    b      "
 * s="    a    b"
 * 
 * 长度就是最后一个词的起始和末尾索引之差
 * 末尾：从最后一个不为空的元素算起，索引不能小于0
 * 
 * 起始：从末尾索引往前找，遇到空元素就返回长度，如果没遇到，返回整个字符的长度
 */

var lengthOfLastWord = function(s) {
  let end = s.length -1;
  if(end<0) return 0;

  while(end>=0 && s[end] == " "){
    end--;
  }
  let start = end;
  while(start>=0 && s[start] != " "){
    start--;
  }
  return end - start;
};

let ret = lengthOfLastWord("     a a aa   ");
console.log(ret);
