// Задание № 1

/*
var a = 1, b = 1, c, d;
c = ++a; console.log (c);           // 2- сначала присваивает, потом выводит 
d = b++; console.log (d);           // 1- сначала выводит, потом присваивает
c = (2+ ++a); console.log (c);      // (2 + 3) - 5
d = (2+ b++); console.log (d);      // (2 + 2) - 4
console.log (a);                    // 3
console.log (b);                    // 3
*/

// Задание № 2

/*
var a = 2;
var x = 1 + (a *= 2); // 1 + (2 * 2) = 5
console.log ('Результат задания №2 - ' + x);
*/

// Задание № 3

var a = +prompt ('Задание 3: Введите число А');
var b = +prompt ('Задание 3: Введите число Б');

if (a >= 0 && b >= 0) {
	console.log ('Результат задания № 3 - ' + (a - b))
} 
else if (a < 0 && b <0) {
	console.log ('Результат задания № 3 - ' + (a * b))
} 
else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
	console.log ('Результат задания № 3 - ' + (a + b))
}

// Задание № 4

console.log ('Результат заданя № 4: ')
var a = +prompt('Задание 4: Введите число от 0 до 15');
switch (a) {
case 0:
	console.log(1);
case 1:
	console.log(2);
case 2:
	console.log(3);
case 3:
	console.log(4);
case 4:
	console.log(5);
case 5:
	console.log(6);
case 6:
	console.log(7);
case 7:
	console.log(8);
case 8:
	console.log(9);
case 9:
	console.log(10);
case 10:
	console.log(11);
case 11:
	console.log(12);
case 12:
	console.log(13);
case 13:
	console.log(14);
case 14:
	console.log(15);
	break;
default:
	console.log('Результат задания № 4 - ' + 'Вы ввели неверное число')
}

// Задание № 5

/*
var x = + prompt('Задание 5: введите число x');
var y = + prompt('Задание 5: введите число y');
*/

function addition (x, y){
	return (x + y);
}

function subtr (x, y){
	return (x - y);
}

function multi (x, y){
	return (x * y);
}

function dividing (x, y){
	return (x / y);
}

// Задание № 6

var arg1 = + prompt('Задание 6: введите первое число');
var arg2 = + prompt('Задание 6: введите второе число');
var operation = + prompt('Задание 6: введите операцию: 1 - сложение, 2 - вычитание, 3 - умножение, 4 - деление');

function mathOperation (arg1, arg2, operation) {
	switch(operation) {
		case 1:
			return addition (arg1, arg2);
			break;
		case 2:
			return subtr (arg1, arg2);
			break;
		case 3:
			return multi (arg1, arg2);
			break;
		case 4:
			return dividing (arg1, arg2);
			break;
		default:
			console.log('Вы ввели неверную операцию');
	}
}

var add6 = mathOperation (arg1, arg2, operation);
console.log('Результат №6 - ' + add6);

// Задание № 8

var val = +prompt('Задание 8: Введите число');
var pow = +prompt('Задание 8: Введите степень')

function power (val, pow) {
	if (pow != 1) {
		return val *= power(val, pow - 1)
	} else {
		return val;
	}
}

var funcPow = power (val, pow);
console.log(funcPow)

