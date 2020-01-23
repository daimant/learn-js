"use strict";

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let count = 0;
  let currentValue;

  while (1) {
    currentValue = 0;
    num
      .toString()
      .split("")
      .forEach(item => (currentValue += +item));
    num = currentValue;
    if (num < 10) return num;
  }
};
