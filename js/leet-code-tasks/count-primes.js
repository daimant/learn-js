"use strict";

/**
 * @param {number} n
 * @return {number}
 */
// тоже слишком жирное
var countPrimes = function(n) {
  let arr = [2];
  for (let i = 2; i < n; i++) arr.push(i);

  for (let i = 0; i < arr.length / 10; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] % arr[i] === 0) {
        arr.splice(j, 1);
      }
    }
  }

  //console.log(arr);

  return arr.length;
};

console.log();

// слишком жирное
//   let arr = [];
//   for(let i = 2; i < n; i++) arr.push(i)
//   let current;

//   for(let j = 0; j < arr.length; j++) {
//     current = arr[j]
//     arr = arr.filter(item => item % current !== 0)
//     arr.splice(j,0,current);
//   }

//   return arr.length;
