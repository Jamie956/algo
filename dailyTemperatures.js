/*
739. Daily Temperatures
Given a list of daily temperatures T, return a list such that, 
for each day in the input, tells you how many days you would have to wait 
until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

core, today temperatures compare to some day in future, 
  the key point is find the future day, 
  the day closest to today and temperatures large than today

foreach from end to start
a stack recording the index j that T[j] is the top point before
if current T[i] >= the top point value, current T[i] become the top point
if current T[i] < top point value, calculate top point index j - current index i
  on day i, will warmer after j-i day
  store index j
*/

var dailyTemperatures = function (T) {
  let indexArr = [];
  let ret = [];
  for (let i = T.length-1; i >= 0; i--) {
    while(T[i]>=T[indexArr[indexArr.length-1]]){
      indexArr.pop();
    }
    ret[i] = (indexArr.length >0) ? indexArr[indexArr.length-1]-i :0;
    indexArr.push(i);
  }
  return ret;
};

console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]));//[8,1,5,4,3,2,1,1,0,0]