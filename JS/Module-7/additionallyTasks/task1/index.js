let categories = document.querySelectorAll('.categories > li');   // Присвоим переменной массив из всех li, которые находятся в списке "categories"
console.log(categories);
console.log(categories.length);

categories.forEach(el => {
// Для каждого элемента массива categories (для каждой категории)
  console.log(el.firstChild);
// Выведем первый дочерний элемент категории (Текст с названием категории)
  console.log(el.firstElementChild.childElementCount);
// Выведем количество элементов в первом дочернем элементе-узле (список категории)
});
  
