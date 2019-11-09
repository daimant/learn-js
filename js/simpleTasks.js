'use strict';

var a, b, c, d, x, value;

console.log( typeof x );              // возвращает тип
console.log( typeof(x) );             // возвращает тип
console.log( String(x) );             // преобр в стр
console.log( x );                     // преобр в стр
console.log( Number(x) );             // преобразует в число
console.log( Boolean(x) );            // преобразует в логич знач
console.log( +a );                    // преобразует в число
console.log( a % b );                 // остаток от деления a на b
console.log( a ** b );                // возведение a в степень b
console.log( a ** (1/2) );            // квадратный корнень
console.log( a ** (1/3) );            // кубический корнень

var name = "Ilya";
console.log( `hello ${1}` );          // hello 1
console.log( `hello ${"name"}` );     // hello name
console.log( `hello ${name}` );       // hello Ilya

console.log("" + 1 + 0);              // '10'
console.log("" - 1 + 0);              // -1
console.log(true + false);            // 1
console.log(6 / "3");                 // 2
console.log("2" * "3");               // 6
console.log(4 + 5 + "px");            // '9px'
console.log("$" + 4 + 5);             // '$45'
console.log("4" - 2);                 // 2
console.log("4px" - 2);               // NaN
console.log(7 / 0);                   // Infinity
console.log("  -9  " + 5);            // '  -9  5'
console.log("  -9  " - 5);            // -14
console.log(null + 1);                // 1
console.log(undefined + 1);           // NaN
console.log(" \t \n" - 2);            // -2

a = 1;
b = 1;
c = ++a;                              // a = 2; c = 2; инкремент, префиксная форма
d = b--;                              // b = 0; d = 1; декремент, постфиксная форма

a = 2;
x = 1 + (a *= 2);                     // a = 4; x = 5;

console.log( 'Я' > 'А' );             // true
console.log( 'Кот' > 'Код' );         // true
console.log( 'Сонный' > 'Сон' );      // true
console.log( '2' > 1 );               // true, строка '2' становится числом 2
console.log( '01' == 1 );             // true, строка '01' становится числом 1
console.log( null == undefined );     // true
console.log( null === undefined );    // false
console.log( null > 0 );              // false
console.log( null == 0 );             // false
console.log( null >= 0 );             // true
console.log( undefined > 0 );         // false
console.log( undefined < 0 );         // false
console.log( undefined == 0 );        // false

console.log( 'a' > 'А' );             // true
console.log( "ананас" > "яблоко" );   // false
console.log( "2" > "12" );            // true
console.log( undefined === null );    // false
console.log( null == "\n0\n" );       // false
console.log( null === +"\n0\n" );     // false