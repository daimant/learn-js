'use strict';

var a, b, c, d, x, value;

alert( typeof x );              // возвращает тип
alert( typeof(x) );             // возвращает тип
alert( String(x) );             // преобр в стр
alert( x );                     // преобр в стр
alert( Number(x) );             // преобразует в число
alert( Boolean(x) );            // преобразует в логич знач
alert( +a );                    // преобразует в число
alert( a % b );                 // остаток от деления a на b
alert( a ** b );                // возведение a в степень b
alert( a ** (1/2) );            // квадратный корнень
alert( a ** (1/3) );            // кубический корнень

var name = "Ilya";
alert( `hello ${1}` );          // hello 1
alert( `hello ${"name"}` );     // hello name
alert( `hello ${name}` );       // hello Ilya

a = "" + 1 + 0;                 // '10'
a = "" - 1 + 0;                 // -1
a = true + false;               // 1
a = 6 / "3";                    // 2
a = "2" * "3";                  // 6
a = 4 + 5 + "px";               // '9px'
a = "$" + 4 + 5;                // '$45'
a = "4" - 2;                    // 2
a = "4px" - 2;                  // NaN
a = 7 / 0;                      // Infinity
a = "  -9  " + 5;               // '  -9  5'
a = "  -9  " - 5;               // -14
a = null + 1;                   // 1
a = undefined + 1;              // NaN
a = " \t \n" - 2;               // -2

a = 1;
b = 1;
c = ++a;                        // a = 2; c = 2; инкремент, префиксная форма
d = b--;                        // b = 0; d = 1; декремент, постфиксная форма

a = 2;
x = 1 + (a *= 2);               // a = 4; x = 5;

alert( 'Я' > 'А' );             // true
alert( 'Кот' > 'Код' );         // true
alert( 'Сонный' > 'Сон' );      // true
alert( '2' > 1 );               // true, строка '2' становится числом 2
alert( '01' == 1 );             // true, строка '01' становится числом 1
alert( null == undefined );     // true
alert( null === undefined );    // false
alert( null > 0 );              // false
alert( null == 0 );             // false
alert( null >= 0 );             // true
alert( undefined > 0 );         // false
alert( undefined < 0 );         // false
alert( undefined == 0 );        // false

alert( 'a' > 'А' );             // true
alert( "ананас" > "яблоко" );   // false
alert( "2" > "12" );            // true
alert( undefined === null );    // false
alert( null == "\n0\n" );       // false
alert( null === +"\n0\n" );     // false