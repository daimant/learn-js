'use strict';

//Напишите условие if для проверки, что значение переменной age НЕ находится в
//диапазоне 14 и 90 включительно. Напишите два варианта: первый с
// использованием оператора НЕ !, второй – без этого оператора.

var age = prompt('Введите число: ', '');

if (!(age >= 14 && age <=90)) {
  console.log('1 способ: не находится в диапазоне от 14 до 90');
}

if (age < 14 || age > 90) {
  console.log('2 способ: не находится в диапазоне от 14 до 90');
}

