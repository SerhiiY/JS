let btn = document.querySelector('.btn'),
    result = document.querySelector('.result'),
    form = document.querySelector('.question-form')

function fn(event) {
  event.preventDefault();                              // Предотвратить выполнение функций по-умолчанию (перезагрузка страницы)
  result.textContent = `Result: ${form.option.value}`; // В блок result вписать текст ... с именем выбранной опции
}

btn.addEventListener('click', fn);                     // При клике на кнопку выполнить функцию
