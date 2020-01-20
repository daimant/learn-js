"use strict";

// поиск среднего из трех чисел используя только условия if/else

function searchAverage(arr) {
  if (arr[0] > arr[1]) arr = [arr[1], arr[0], arr[2]];
  if (arr[1] > arr[2]) arr = [arr[0], arr[2], arr[1]];
  if (arr[0] > arr[1]) arr = [arr[1], arr[0], arr[2]];

  return arr[1];
}

console.log(searchAverage([3, 1, 2])); // 2

// первая версия
//if (arr[1] < arr[0] && arr[0] < arr[2] ||
//  arr[2] < arr[0] && arr[0] < arr[1]) return arr[0];
//
//if (arr[0] < arr[1] && arr[1] < arr[2] ||
//  arr[2] < arr[1] && arr[1] < arr[0]) return arr[1];
//
//return arr[2];
