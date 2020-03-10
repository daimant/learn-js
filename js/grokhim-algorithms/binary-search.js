"use strict";

const search = function(nums, target) {
  let low = 0;
  let high = nums.length;

  while (low <= high) {
    let middle = Math.trunc((low + high) / 2);
    let guess = nums[middle];

    if (guess === target) {
      return middle;
    } else if (guess > target) {
      high = middle - 1;
    } else low = middle + 1;
  }

  return -1;
};

let myList = [
  1,
  2,
  5,
  6,
  7,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  21,
  23,
  33,
  44,
  55,
  66,
  67,
  99,
  1000
];

console.log(search(myList, 33));
console.log(search(myList, 6));
