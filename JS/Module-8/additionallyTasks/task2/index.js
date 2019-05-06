let result = document.querySelector('.result'),
    input = document.querySelectorAll('input'),
    btn = document.querySelector('[data-action="add"]');

function summ(event) {
  result.textContent = `${Number(input[0].value) + Number(input[1].value)}`;
}

btn.addEventListener('click', summ);
