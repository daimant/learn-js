"use strict";

// написать функцию сортировки трех чисел с помощью if/else

function sortArr(arr) {
  if (arr[0] > arr[1]) arr = [arr[1], arr[0], arr[2]];
  if (arr[1] > arr[2]) arr = [arr[0], arr[2], arr[1]];
  if (arr[0] > arr[1]) arr = [arr[1], arr[0], arr[2]];

  return arr;
}

console.log(sortArr([2, 3, 1]));
