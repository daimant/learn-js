"use strict";

let Calculator = function(value) {
  this.calculate = 1;
};

Calculator(111).calculate;

let calc = new Calculator();

alert(calc.calculate("3 + 7")); // 10
