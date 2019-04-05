  // Задание 1 (урок 4)

var number = + prompt ('Введите число от 0 до 999');
var object = {};

  function getNumber (par1) {
  	if (par1 < 0 || par1 > 999) {
  		console.log('Вы ввели некорректное число');
  		return object;
  	} else {
  		object['единицы'] = par1 % 10;
  		object['десятки'] = (par1 - object['единицы']) % 100 / 10;
  		object['сотни'] = (par1 - object['единицы'] - object['десятки'] * 10) % 1000 / 100;
  		return object;
  	}
  }

  console.log (getNumber(number));

    // Задание 3 (урок 4)

    

