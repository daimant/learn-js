"use strict";

const sayCount = value => {
  if (value < 1) return;
  console.log(value);
  return sayCount(value - 1);
};

console.log(sayCount(3));
