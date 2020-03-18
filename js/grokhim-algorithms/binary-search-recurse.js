"use strict";

const binarySearchRecurse = (arr, target, low = 0, high = arr.length) => {
  let middle = Math.trunc((high + low) / 2);
  let guess = arr[middle];
  return guess === target
    ? middle
    : guess > target
    ? binarySearchRecurse(arr, target, low, middle - 1)
    : guess < target
    ? binarySearchRecurse(arr, target, middle + 1, high)
    : -1;
};

console.log(
  binarySearchRecurse(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 22, 33, 55, 100, 1000],
    100
  )
);
