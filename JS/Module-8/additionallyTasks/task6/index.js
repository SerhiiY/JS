const list = document.querySelector('.list');

list.addEventListener('click', deleteElem); // При клике на список выполнить функцию

function deleteElem(event) {                // Функция удаления элемента
  const target = event.target;              // Присвоем константе текущий элемент события (на который кликнули)
  if (target.nodeName !== 'BUTTON') return; // Если этом элемент не кнопка, выйти из функции (ничего не делать)
  target.parentNode.remove();               // Иначе Удалить родительский элемент-узел
}
