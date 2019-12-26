"use strict";

//Создайте объект calculator (калькулятор) с тремя методами:
//
//  read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//sum() (суммировать) возвращает сумму сохранённых значений.
//mul() (умножить) перемножает сохранённые значения и возвращает результат.
//  let calculator = {
//  // ... ваш код ...
//};
//
//calculator.read();
//alert( calculator.sum() );
//alert( calculator.mul() );

let calculator = {
  read() {
    this.firstNum = +prompt("Введите первое число:", "");
    this.secondNum = +prompt("Введите второе число:", "");
  },
  sum() {
    return this.firstNum + this.secondNum;
  },
  mul() {
    return this.firstNum * this.secondNum;
  }
};

calculator.read();
console.log(`${calculator.firstNum}, ${calculator.secondNum}`);
console.log(calculator.sum());
console.log(calculator.mul());
