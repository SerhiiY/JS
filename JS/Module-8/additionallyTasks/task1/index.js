let btn = document.querySelector('.button');
let value = 0;

function plus(event){
  value++;
  btn.textContent = value;
}

btn.addEventListener('click', plus);
