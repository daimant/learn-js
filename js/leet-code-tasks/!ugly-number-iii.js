"use strict";

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
  let arr = [a, b, c];

  for (let i = 0; i < n * 3; i++) {
    if (arr.indexOf(arr[i] * arr[0]) === -1) arr.push(arr[i] * arr[0]);
    if (arr.indexOf(arr[i] * arr[1]) === -1) arr.push(arr[i] * arr[1]);
    if (arr.indexOf(arr[i] * arr[2]) === -1) arr.push(arr[i] * arr[2]);
  }

  arr.sort();
  return arr[n - 1];
};

let start = Date.now();
console.log(nthUglyNumber(100000, 2, 217983653, 336916467));
console.log((Date.now() - start) / 1000);
