// Task 3
let arr = [];
const string = prompt("Enter some words using space:");
arr = string.split(" ");
console.log(arr);                     // Выводим массив
console.log(arr.length);              // Выводим длину массива
for(let i = 0; i < arr.length; i++) {
  console.log(i);                     // Выводим циклом индексы массива по очереди
}
for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);                // Выводим циклом элементы массива по очереди
}
for(let i = 0; i < arr.length; i++) {
  console.log(`${i}:${arr[i]}`);      // Выводим циклом пары индекс:значение массива
}
