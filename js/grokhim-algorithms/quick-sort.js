"use strict";
// dont work
const qSort = arr => {
  if (arr.length < 2) {
    return arr;
  } else {
    let middle = Math.trunc(arr.length / 2);
    let less = arr.slice(0, middle);
    let high = arr.slice(middle, arr.length);

    return [...qSort(less), middle, ...qSort(high)];
  }
};

myList = [
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

myList.sort(() => 0.5 - Math.random());

console.log(qSort(myList));
