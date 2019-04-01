// задание 1 (проверка простых чисел)

var prime = [2],
	num = 2;
while (num <= 100) {
	var numcheck = 1;
	for (var i = 0; i < prime.length; i++) {
		if ( num % prime[i] === 0) {
			numcheck = 0;
		}
	}
	if (numcheck === 1) {
		prime.push(num);
	}
	num++;
}
console.log(prime);

// задание 2 (сумма элементов в массиве)

var basket = [3, 5, 10, 234, 3456];

function arraySumm (array) {
	var summ = 0;
	for (var i = 0; i <array.length; i++) {
		summ += array[i];
	}
	console.log('Сумма всех элементов в массиве: ' + summ);
}
arraySumm(basket);

// задание 3 ()

var goods = ['Товар1', 'Товар2', 'Товар3'];
var price = [245, 564, 2333];
goods.push('Товар4');
price.push(9999);

function countBasketPrice (array) {
	var basketPrice = 0;
	for (var i = 0; i < price.length; i++){
		basketPrice += price[i];
	}
	console.log('Стоимость вашей корзины: ' + basketPrice);
}
countBasketPrice(price);

// Задание 4

for (var i = 0; i < 10; console.log(i++));

// Задание 5

var x = 'x';
for (var i = 0; i < 5; i++) {
	console.log(x);
	x += 'x';
};