"use strict";

//  Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря,
//  умножает x на себя n раз и возвращает результат.
//
//  pow(3, 2) = 3 * 3 = 9
//  pow(3, 3) = 3 * 3 * 3 = 27
//  pow(1, 100) = 1 * 1 * ...* 1 = 1
//
//    Создайте страницу, которая  запрашивает x и n, а затем выводит
//  результат pow(x,n).
//  P.S. В этой задаче функция обязана поддерживать только
//  натуральные значения n, т.е. целые от 1 и выше.

function makePow(a, b) {
  if (a % 1 !== 0 || b % 1 !== 0) {
    throw new Error("Введите целое");
  }

  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }

  return result;
}

console.log(makePow(3, 2));
console.log(makePow(3, 3));
console.log(makePow(1, 100));
console.log(makePow(1, 1.5));
