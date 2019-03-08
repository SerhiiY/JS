// Task 6
const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const newArray = [];

for(const value of numbers) { // Перебираем все элементы массива numbers
  if(value > num) { 					// Если элемент > num, то
		newArray.push(value);			// Записать элемент в конец массива newArray
	}
}
console.log(newArray);				// Вывести массив newArray, содержащий эдементы, которые соответствуют условию
