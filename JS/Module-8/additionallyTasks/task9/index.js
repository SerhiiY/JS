let btn = document.querySelector('[data-action="open-modal"]'),
    closeBtn = document.querySelector('[data-action="close-modal"]'),
    modal = document.querySelector('.js-modal-backdrop');
    
btn.addEventListener('click', openFn);        // При клике на кнопку открытия модального окна запустить функцию
closeBtn.addEventListener('click', closeFn);  // При клике на кнопку закрытия запустить функцию, зыкрывающую окно
modal.addEventListener('click', backdropFn);  // При клике на контейнер с модальным окном, запустить функцию зыкрывающую окно

function openFn(event) {                  // Обьявим функцию, которая будет открывать модальное окно
  modal.classList.remove('modal-hidden'); // Удалить скрывающий класс модального окна (показать модальное окно)
}

function closeFn(event) {                 // Обьявим функцию, которая будет закрывать модальное окно
  modal.classList.add('modal-hidden');    // Добавить скрывающий класс модальному окну (закрыть модальное окно)
}

function backdropFn(event) {              // Обьявим функцию, закрывающую окно при клике на фон контейнера с модальным окном
  const target = event.target;            // Присвоим константе текущий элемент, на котором произошло событие (на который кликнули)
  if(target !== modal) return;            // Если текущий элемент не является контейнером (фоном), то выйти из функции (ничего не делать)
  modal.classList.add('modal-hidden');    // Иначе добавить скрывающий класс модальному окну (закрыть модальное окно)
}
