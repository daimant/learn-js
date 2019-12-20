"use strict";

//Напишите функцию sumInput(), которая:
//Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//  Заканчивает запрашивать значения, когда пользователь введёт не числовое значение,
//  пустую строку или нажмёт «Отмена».
//Подсчитывает и возвращает сумму элементов массива.
//  P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  let inputArr = [];
  let sumValue = 0;

  for (;;) {
    let input = prompt("Введите число", "");

    if (input === null || input === "" || input != +input) break;

    inputArr.push(input);
  }

  for (let i = 0; i < inputArr.length; i++) {
    sumValue += +inputArr[i];
  }

  return sumValue;
}

console.log(sumInput());
