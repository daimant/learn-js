"use strict";

let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push([Math.ceil(1000 * Math.random()), Math.ceil(1000 * Math.random())]);
}
arr.sort(() => 0.5 - Math.random());
//arr.sort((a, b) => (a > b ? 1 : -1));
console.log(JSON.stringify(arr));
