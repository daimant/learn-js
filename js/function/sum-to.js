"use strict";

//Вычислить сумму чисел до данного
//важность: 5
//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//  Например:
//sumTo(1) = 1
//sumTo(2) = 2 + 1 = 3
//sumTo(3) = 3 + 2 + 1 = 6
//sumTo(4) = 4 + 3 + 2 + 1 = 10
//...
//sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
//Сделайте три варианта решения:
//  С использованием цикла.
//  Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//  С использованием формулы арифметической прогрессии.
//  Пример работы вашей функции:
//  function sumTo(n) { /*... ваш код ... */ }
//alert( sumTo(100) ); // 5050
//P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
//  P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
function sumToWithRecursion(n) {
  return n > 1 ? (n += sumToWithRecursion(n - 1)) : n;
}

function sumToWithIteration(n) {
  let startTime = Date.now();

  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return `iteration method result: ${result} and time ${Date.now() -
    startTime} ms`;
}

function sumToWithArithmeticProgression(n) {
  return (n * (n + 1)) / 2;
}

console.log(`recursion method result: ${sumToWithRecursion(10000)}`); // = 100 + 99 + ... + 2 + 1 = 5050
console.log(sumToWithIteration(10000)); // = 100 + 99 + ... + 2 + 1 = 5050
console.log(
  `arithmetic progression method result: ${sumToWithArithmeticProgression(
    10000
  )}`
);
