"use strict";

// Несколько вариантов case, использующих один код, можно группировать.

let a = 2 + 2;

switch (a) {
  case 4:
    alert("Правильно!");
    break;

  case 3: // (*) группируем оба case
  case 5:
    alert("Неправильно!");
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert("Результат выглядит странновато. Честно.");
}

//  Нужно отметить, что проверка на равенство всегда строгая.
//  Значения должны быть одного типа, чтобы выполнялось равенство.

let arg = prompt("Введите число?");
switch (arg) {
  case "0":
  case "1":
    alert("Один или ноль");
    break;

  case "2":
    alert("Два");
    break;

  case 3:
    alert("Никогда не выполнится!");
    break;
  default:
    alert("Неизвестное значение");
}
