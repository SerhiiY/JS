 let list1 = document.querySelector('.list1');
const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
list1.innerHTML = elements.reduce((acc, el) => acc + `<li>${el}</li>`, "");
// Добавить в переменную list1 (список) несколько li с каждым из элементов массива elements
console.log(list1);
