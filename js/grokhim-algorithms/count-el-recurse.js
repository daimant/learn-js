"use strict";

const countElArr = arr => {
  arr.pop();
  return arr.length > 0 ? 1 + countElArr(arr) : 1;
};

console.log(countElArr([1, 2, 3, 4, 5, 6, 7]));
