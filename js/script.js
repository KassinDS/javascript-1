// Задание № 1

var a = 1, b = 1, c, d;
c = ++a; console.log (c);           // 2- сначала присваивает, потом выводит 
d = b++; console.log (d);           // 1- сначала выводит, потом присваивает
c = (2+ ++a); console.log (c);      // (2 + 3) - 5
d = (2+ b++); console.log (d);      // (2 + 2) - 4
console.log (a);                    // 3
console.log (b);                    // 3

// Задание № 2

var a = 2;
var x = 1 + (a *= 2); // 5
console.log ('Результат задания №2 - ' + x);

// Задание № 3

var a = +prompt ('Введите число А');
var b = +prompt ('Введите число Б');

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

var a = +prompt('Введите число от 0 до 15');
switch (a) {
	case 0:
	console.log('Результат задания № 4 - ' + ('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15'));
	break;
case 1:
	console.log('Результат задания № 4 - ' + ('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15'));
	break;
case 2:
	console.log('Результат задания № 4 - ' + ('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15'));
	break;
case 3:
	console.log('Результат задания № 4 - ' + ('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15'));
	break;
case 4:
	console.log('Результат задания № 4 - ' + ('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15'));
	break;
case 5:
	console.log('Результат задания № 4 - ' + ('6, 7, 8, 9, 10, 11, 12, 13, 14, 15'));
	break;
case 6:
	console.log('Результат задания № 4 - ' + ('7, 8, 9, 10, 11, 12, 13, 14, 15'));
	break;
case 7:
	console.log('Результат задания № 4 - ' + ('8, 9, 10, 11, 12, 13, 14, 15'));
	break;
case 8:
	console.log('Результат задания № 4 - ' + ('9, 10, 11, 12, 13, 14, 15'));
	break;
case 9:
	console.log('Результат задания № 4 - ' + ('10, 11, 12, 13, 14, 15'));
	break;
case 10:
	console.log('Результат задания № 4 - ' + ('11, 12, 13, 14, 15'));
	break;
case 11:
	console.log('Результат задания № 4 - ' + ('12, 13, 14, 15'));
	break;
case 12:
	console.log('Результат задания № 4 - ' + ('13, 14, 15'));
	break;
case 13:
	console.log('Результат задания № 4 - ' + ('14, 15'));
	break;
case 14:
	console.log('Результат задания № 4 - ' + ('15'));
	break;
case 15:
	console.log('Результат задания № 4 - ' + ('15'));
	break;
default:
	console.log('Результат задания № 4 - ' + 'Вы ввели неверное число')
}

// Задание № 5

function addition (x, y)
{
	return (x + y);
}

function subtr (x, y)
{
	return (x - y);
}

function multi (x, y)
{
	return (x * y);
}

function dividing (x, y)
{
	return (x / y);
}

var add = addition(10, 10);
var sub = subtr (50, 20);
var mul = multi (2, 6);
var div = dividing (10, 2);
console.log ('Результат задания № 4 - ' + 'сложение - ' + add + ', вычитание - ' + sub + ', умножение - ' + mul + ', деление - ' + div);
