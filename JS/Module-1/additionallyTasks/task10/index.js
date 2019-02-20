// Task 10
let num = prompt('Введите число от 1 до 5:');
let catalog;

if (num === null) {
	console.log(alert('Очень жаль, приходите еще!'));
} else if (num >= 1 && num <= 5) {
	switch (num) {
		case '1':
			catalog = 'Каталог хостелов';
			break;
		case '2':
			catalog = 'Каталог бюджетных отелей';
			break;
		case '3':
			catalog = 'Каталог отелей ***';
			break;
		case '4':
			catalog = 'Каталог отелей ****';
			break;
		case '5':
			catalog = 'Каталог лучших отелей';
			break;
		default:
		catalog = 'Каталог хостелов';
	}
	console.log(alert(catalog));
} else {
	console.log(alert('Неверный ввод, возможные варианты 1-5!'));
}
