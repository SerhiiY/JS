// Task 8
let numbers = [];
let sum = 0;
let i = -1;
do{																										// Начало скрипта
	i++;																								// i = i + 1
	numbers[i] = Number(prompt("Enter the number:"));		// i элементу массива numbers присвоить введенное пользователем число
	console.log(numbers[i]);														// Вывести в консоль i элемент
} while(numbers[i] != 0);															// Выполнять скрипт пока i элемент не равен 0 (он будет равен 0 при нажатии кнопки cancel)

numbers.pop();																				// Удалить последний нулевой элемент массива
console.log(numbers);																	// Вывести массив numbers

for(i = 0; i < numbers.length; i++) {									// Выполнить скрипт для каждого элемента массива
	sum = sum + numbers[i];															// Складываем каждый последующий элемент с предыдущими, записывая их в переменную sum
}

console.log(sum);																			// Вывести сумму всех элементов массива
