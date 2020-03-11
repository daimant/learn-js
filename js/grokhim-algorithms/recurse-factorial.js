"use strict";

const recurseFactorial = value =>
  value > 1 ? value * recurseFactorial(value - 1) : value;

// const recurseFactorial = (value, result = 1) => {
//   return value > 1 ? recurseFactorial(value - 1, result * value) : result;
// };

console.log(recurseFactorial(5));
