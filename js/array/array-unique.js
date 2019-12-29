"use strict";

//Пусть arr – массив строк.
//  Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
//  Например:
//function unique(arr) {
//  /* ваш код */
//}
//let strings = ["кришна", "кришна", "харе", "харе",
//  "харе", "харе", "кришна", "кришна", ":-O"
//];
//alert( unique(strings) ); // кришна, харе, :-O

function unique(arr) {
  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) uniqueArr.push(arr[i]);
  }
  return uniqueArr;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O
