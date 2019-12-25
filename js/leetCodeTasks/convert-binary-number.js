"use strict";

var getDecimalValue = function(head) {
  let num = head.join("");
  return parseInt(+num, 2);
};

console.log(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])); //18880
console.log(getDecimalValue([1, 0, 1])); //5
console.log(getDecimalValue([0])); //0
console.log(getDecimalValue([1])); //1
console.log(getDecimalValue([0, 0])); //0
