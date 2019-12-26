"use strict";

//Создайте функцию readNumber, которая будет запрашивать ввод числового значения
//до тех пор, пока посетитель его не введёт.
//  Функция должна возвращать числовое значение.
//  Также надо разрешить пользователю остановить процесс ввода, отправив пустую
//строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
  let needNumber;
  for (;;) {
    needNumber = prompt("Введите число", "");
    if (isFinite(needNumber)) break;
  }
  return needNumber === null || needNumber === "" ? null : +needNumber;
}

console.log(readNumber());
