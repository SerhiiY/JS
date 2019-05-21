  const timers = document.querySelector('.timers');
  const timerBody = document.querySelector('.container');

function getFormattedTime(time) {
  let date = new Date(time),
      minutes = ('0' + date.getMinutes()).slice(-2),
      seconds = ('0' + date.getSeconds()).slice(-2),
      milliseconds = Math.floor(date.getMilliseconds()/100);
  return `${minutes}:${seconds}.${milliseconds}`;
}

class Timer {
  constructor(parent){
    this.parent = parent.cloneNode(true);
    this.clockface = this.parent.querySelector('.js-clockface');
    this.startBtn = this.parent.querySelector('.js-timer-start');
    this.clearBtn = this.parent.querySelector('.js-timer-clear');
    this.lapBtn = this.parent.querySelector('.js-timer-lap');
    this.laps = this.parent.querySelector('.js-laps');
    this.time = 0;
    this.currentTime = 0;
    timers.appendChild(this.parent);
    this.startFnBind = this.startFn.bind(this);
    this.stopFnBind = this.stopFn.bind(this);
    this.updateClockfaceBind = this.updateClockface.bind(this);
  }

  updateClockface() {
    this.clockface.textContent = getFormattedTime(this.time);
    this.currentTime = this.time;
    this.time += 100;
  }

  stopFn() {
    clearInterval(this.count);
    this.startBtn.textContent = 'CONTINUE';
    this.startBtn.removeEventListener('click', this.stopFnBind);
    this.startBtn.addEventListener('click', this.startFnBind);

  }

  clearFn() {
    this.stopFn();
    this.time = 0;
    this.currentTime = this.time;
    this.clockface.textContent = getFormattedTime(this.time);
    this.startBtn.textContent = 'START';
    this.laps.innerHTML = '';
  }

  startFn() {
    this.count = setInterval(this.updateClockfaceBind, 100);
    this.startBtn.removeEventListener('click', this.startFnBind);
    this.startBtn.addEventListener('click', this.stopFnBind);
    this.startBtn.textContent = 'PAUSE';
  }

  lapFn() {
    this.laps.innerHTML += `<li>${getFormattedTime(this.currentTime)}</li>`;
  }

  run() {
    this.lapBtn.addEventListener('click', this.lapFn.bind(this));
    this.startBtn.addEventListener('click', this.startFnBind);
    this.clearBtn.addEventListener('click', this.clearFn.bind(this));
  }

}

let timer = new Timer(timerBody);
timer.run();
let timer2 = new Timer(timerBody);
timer2.run();

document.querySelector('.timers').firstElementChild.classList.add('hidden');
