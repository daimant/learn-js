"use strict";

console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log(!!"non-empty string"); // true, преобразует к логическому типу
console.log(!!null); // false, преобразует к логическому типу
console.log(alert(1) || 2); // 1, 2, alert возвращает undefined
console.log(null || (2 && 3) || 4); // 3, приоритет && выше, чем у ||
