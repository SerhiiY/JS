// Task 7
let number = prompt('Введите произвольное целое число:');
if (number === null) {
	console.log(alert('Приходите еще!'));
} else if  (number % 1 === 0) {
	console.log(alert('Спасибо!'));
} else {
	console.log(alert('Необходимо было ввести целое число!'));
}
