const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

let count = 0;
let clear;
let start = document.querySelector('[data-action="start"]'),
    stop = document.querySelector('[data-action="stop"]'),
    body = document.querySelector('body');

function changeBackgroundColor() {
  count = Math.round(Math.random()*5);
  body.style.backgroundColor = colors[count];
  console.log(count);
}

function stopFn() {
  clearInterval(clear);
  start.disabled = false;
  stop.disabled = true;
}

function startFn() {
  clear = setInterval(changeBackgroundColor, 1000);
  start.disabled = true;
  stop.disabled = false;
}

start.addEventListener('click', startFn);
stop.addEventListener('click', stopFn);
