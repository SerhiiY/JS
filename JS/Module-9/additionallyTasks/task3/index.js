const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const clearBtn = document.querySelector(".js-timer-stop");
const lapBtn = document.querySelector('.js-timer-lap');
const laps = document.querySelector('.laps');

let time = 0;

function updateClockface() {
  clockface.textContent = getFormattedTime(time);
  time += 100;
}

function getFormattedTime(time) {
  let date = new Date(time),
      minutes = ('0' + date.getMinutes()).slice(-2),
      seconds = ('0' + date.getSeconds()).slice(-2),
      milliseconds = Math.floor(date.getMilliseconds()/100);
  return `${minutes}:${seconds}.${milliseconds}`;
}

function stopFn() {
  clearInterval(count);
  startBtn.textContent = 'CONTINUE';
  startBtn.removeEventListener('click', stopFn);
  startBtn.addEventListener('click', startFn);
}

function clearFn() {
  stopFn();
  time = 0;
  clockface.textContent = getFormattedTime(time);
  clearBtn.disabled = true;
  startBtn.textContent = 'START';
  laps.innerHTML = '';
}

function startFn() {
  count = setInterval(updateClockface, 100);
  startBtn.removeEventListener('click', startFn);
  startBtn.addEventListener('click', stopFn);
  clearBtn.disabled = false;
  startBtn.textContent = 'PAUSE';
}

function lapFn() {
  laps.innerHTML += `<li>${getFormattedTime(time)}</li>`;
}


lapBtn.addEventListener('click', lapFn);
startBtn.addEventListener('click', startFn);
clearBtn.addEventListener('click', clearFn);
clearBtn.disabled = true;
