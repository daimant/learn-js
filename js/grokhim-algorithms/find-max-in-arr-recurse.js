"use strict";

const findMaxValRecurse = (arr, max = 0) => {
  if (arr[0] > max) max = arr[0];
  arr.shift();
  return arr.length > 0 ? findMaxValRecurse(arr, max) : max;
};

console.log(findMaxValRecurse([100, 1, 2, 3, 4, 5, 6, 7, 1000]));
