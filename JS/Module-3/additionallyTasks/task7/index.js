// Task 7
const string = "May the force be with you";
let arr = [];
let longestWord = " ";

arr = string.split(' ');										// Превращаем строку в массив, определяя каждый новый элемент по пробелу и записываем массив в arr
console.log(arr);														// Выводим массив arr
console.log(arr.length);										// Выводим количество элементов массива

for(let i = 0; i < arr.length; i++ ) {			// От 0 элеметнта до последнего с шагом 1
	if(arr[i].length > longestWord.length) {	// Если длина элемента больше длины longestWord, то
		longestWord = arr[i];										// Присвоить longestWord значение элемента
	}
}

console.log(longestWord);										// Вывести самый длинный элемент массиваы
