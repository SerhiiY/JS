let message = document.querySelector('.message'),
    input = document.querySelector('.input'),
    inputValue = document.querySelector('.input-value');

input.addEventListener('focus', inputFocus);  // При фокусировке на поле ввода выполнить функцию
input.addEventListener('blur', inputBlur);    // При клике вне поля ввода выполнить функцию
input.addEventListener('input', inputText);   // При вводе в поле текста выполнить функцию

function inputFocus(event) {
  message.textContent = 'Input is in focus!'; // В блок message вписать текст ...
}

function inputText(event) {
  inputValue.textContent = `Current input value: ${input.value}`;
  // В блок inputValue вписать текст ... с добавлением того текста, который мы вводим в input'е
}

function inputBlur(event) {
  message.textContent = ''; // Убираем текст из ,блока message
}
