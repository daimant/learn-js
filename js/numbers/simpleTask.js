"use strict";

let billion = 1e9; // 1 миллиард, буквально: 1 и 9 нулей
console.log(7.3e9); // 7.3 миллиардов (7,300,000,000)
let ms = 1e-6; // шесть нулей, слева от 1
console.log(0xff); // 255 (тоже самое, регистр не имеет значения)
let a = 0b11111111; // бинарная форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255
let num = 255;
console.log(num.toString(16)); // ff       Метод num.toString(base) возвращает строковое
console.log(num.toString(2)); // 11111111 представление числа num в системе счисления base.
console.log((123456).toString(36)); // 2n9c
//Math.floor в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
//Math.ceil в большую сторону: 3.1 становится 4, а -1.1 — -1.
//Math.round до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
//Math.trunc удаление дробной части без округления: 3.1 - 3, а -1.1 — -1.
//      Math.floor	Math.ceil	Math.round	Math.trunc
//3.1	      3	          4	        3	          3
//3.6	      3         	4         4         	3
//-1.1	   -2	         -1        -1        	 -1
//-1.6	   -2        	 -1      	 -2        	 -1
num = 1.23456;
console.log(Math.floor(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23
console.log(num.toFixed(1)); // "12.3" аналогично Math.round
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2)); // 0.3
console.log(9999999999999999); // покажет 10000000000000000
console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, потому что специальное значение: NaN
console.log(isFinite(Infinity)); // false, потому что специальное значение: Infinity
console.log(Object.is(NaN, NaN) === true); // как ===, но более надежен в 2 случаях
console.log(Object.is(0, -0) === false);

console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5
console.log(parseInt("12.3")); // 12, вернётся только целая часть
console.log(parseFloat("12.3.4")); // 12.3, произойдёт остановка чтения на второй точке
console.log(parseInt("0xff", 16)); // 255
console.log(parseInt("ff", 16)); // 255, без 0x тоже работает
console.log(parseInt("2n9c", 36)); // 123456

const theBiggestInt = BigInt(9007199254740991);
const alsoHuge = BigInt(9007199254740991); // ↪ 9007199254740991n
const hugeString = BigInt("9007199254740991"); // ↪ 9007199254740991n
const hugeHex = BigInt("0x1fffffffffffff"); // ↪ 9007199254740991n
const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111"
); // ↪ 9007199254740991n
console.log(theBiggestInt);
// 9007199254740991n - должно создаваться так, но у меня не работает
alert(Math.random()); // 0.1234567894322
alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1
alert(Math.pow(2, 10)); // 2 в степени 10 = 1024
