"use strict";

//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
//  read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму введённых свойств.
//mul() возвращает произведение введённых свойств.
//  Например:
//
//let calculator = new Calculator();
//calculator.read();
//
//alert( "Sum=" + calculator.sum() );
//alert( "Mul=" + calculator.mul() );

function Calculator() {
  this.read = function() {
    this.firstNum = +prompt("Введите первое число:", "");
    this.secondNum = +prompt("Введите второе число:", "");
  };
  this.sum = function() {
    return this.firstNum + this.secondNum;
  };
  this.mul = function() {
    return this.firstNum * this.secondNum;
  };
}

let calculator = new Calculator();

calculator.read();

console.log(`Сумма = ${calculator.sum()}`);
console.log(`Произведение = ${calculator.mul()}`);
