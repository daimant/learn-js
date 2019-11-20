"use strict";

//  Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//  Пример вызовов:
//  min(2, 5) == 2
//  min(3, -1) == -1
//  min(1, 1) == 1

function findMaxNumber(a, b) {
  return a > b ? a : b;
}

console.log(findMaxNumber(2, 5));
console.log(findMaxNumber(3, -1));
console.log(findMaxNumber(1, 1));

//  Напишите функцию max(a,b), которая возвращает большее из чисел a и b.

function findMinNumber(a, b) {
  return a < b ? a : b;
}

console.log(findMinNumber(2, 5));
console.log(findMinNumber(3, -1));
console.log(findMinNumber(1, 1));
