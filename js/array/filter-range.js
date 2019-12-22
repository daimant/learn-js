"use strict";

//Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
//  ищет в нём элементы между a и b и отдаёт массив этих элементов.
//  Функция должна возвращать новый массив и не изменять исходный.
//  Например:
//
//let arr = [5, 3, 8, 1];
//let filtered = filterRange(arr, 1, 4);
//alert( filtered ); // 3,1 (совпадающие значения)
//alert( arr ); // 5,3,8,1 (без изменений)

function filterRange(arr, min, max) {
  return arr.filter(number => number >= min && number <= max);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (совпадающие значения)
console.log(arr); // 5,3,8,1 (без изменений)
