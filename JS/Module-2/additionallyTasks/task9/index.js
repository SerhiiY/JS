// Task 9
"use strict"
const numbers = [3, 5, 12, 15, 25, 37, 41, 109, 333, 655, 999]; // Задаем массив из любых чисел (выигрышные числа)

let min;
do{
min = parseInt(prompt('Enter min number'));	// Присвоить переменной min значение, введенное пользователем и округленное до целого числа (если это число)
if(isNaN(min) === true){										// Если переменная min не является числом, то
alert('It is not a number!')								// Выдать сообщение - это не число
}
}while(isNaN(min) === true);								// Выполнять скрипт пока min не будет являться числом

let max;
do{
max = parseInt(prompt('Enter max number'));	// Тот же скрипт, что и с min, только с переменной max
if(isNaN(max) === true){
alert('It is not a number!')
}
}while(isNaN(max) === true);

let num;
do{
num = parseInt(prompt('Enter the number'));	// Тот же скрипт, что и с min, max, только с переменной num
if(isNaN(num) === true){
alert('It is not a number!')
}
}while(isNaN(num) === true);
let win = 0;

for(let i = 0; i < numbers.length; i) {			// Для элемента i массива numbers выполнять
	if(numbers[i] < min) {										// Если элемент массива меньше минимального числа, то
		numbers.splice(i, 1);										// Удалить 1 элемент начиная с порядкового номера i
		i = i - 1;															// Вернуться на 1 элемент назад (если текущий элемент удалить, то порядковые номера всех последующих элементов сместятся)
	}
	i++;																			// Перейти к следующему элементу
}

for(let i = 0; i < numbers.length; i) {			// То же самое, что и с минимальным числом, только с максимальным
	if(numbers[i] > max) {
		numbers.splice(i, 1);
		i = i - 1;
	}
	i++;
}

console.log(numbers);												// Вывести получившийся массив из выигрышных номеров

for(let i = 0; i < numbers.length; i++) {		// Для каждого элемента получившегося массива
	if(numbers[i] === num) {									// Если элемент равен введенному пользователем числу, то
		win = win + 1;													// Коэффиицент выиграша win = 1
	}
}

if(win >= 1) {															// Если коэффициент выиграша >= 1 (совпали 1 и более элементов массива с числом пользователя), то
	alert('You won');													// Выдать сообщение - вы выигралт
}else {
	alert('You lose');												// Выдать сообшение - вы проиграли
}
