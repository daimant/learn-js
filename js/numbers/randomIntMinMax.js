"use strict";

//Напишите функцию randomInteger(min, max), которая генерирует случайное целое
//(integer) число от min до max (включительно).
//Любое число из интервала min..max должно появляться с одинаковой вероятностью.
//Пример работы функции:
//alert( randomInteger(1, 5) ); // 1
//alert( randomInteger(1, 5) ); // 3
//alert( randomInteger(1, 5) ); // 5

function randomInteger(min, max) {
  return Math.round(Math.random() * (1 + max - min) + min - 0.5);
}

console.log(randomInteger(1, 5)); // 1
console.log(randomInteger(1, 5)); // 3
console.log(randomInteger(1, 5)); // 5
