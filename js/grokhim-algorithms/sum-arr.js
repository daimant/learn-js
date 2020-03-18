"use strict";

const sumArr = arr => {
  let firstElement = arr[0];
  arr.shift();
  return arr.length > 0 ? firstElement + sumArr(arr) : firstElement;
};

console.log(sumArr([1, 2, 3, 4, 5, 6, 7]));
