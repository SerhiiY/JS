const inputs = document.querySelectorAll('.input');
for(let input of inputs){                     // Для каждого поля ввода
  input.addEventListener('blur', checkInput); // При клике вне поля ввода выполнить функцию
}

function checkInput(event) {                    // Функция проверки длиный текста в полях ввода
  if(this.value.length == this.dataset.length){ // Если длина введенного текста в данное поле равно длине, указанной в свойствах поля
    this.classList.remove('invalid');           // Удалить класс неверного ввода
    this.classList.add('valid');                // Добавить класс верного ввода
  }else{
    this.classList.remove('valid');
    this.classList.add('invalid');
  }
}
