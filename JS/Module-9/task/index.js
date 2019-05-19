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
  constructor(timerBody){
    this.container = timerBody.cloneNode(true);
    timers.appendChild(this.container);
    this.clockface = this.container.querySelector('.js-clockface');
    this.startBtn = this.container.querySelector('.js-timer-start');
    this.clearBtn = this.container.querySelector('.js-timer-clear');
    this.lapBtn = this.container.querySelector('.js-timer-lap');
    this.laps = this.container.querySelector('.js-laps');
    this.time = 0;

    this.updateClockface = function() {
      this.clockface.textContent = getFormattedTime(this.time);
      this.time += 100;
    };

    this.stopFn = function() {
      clearInterval(this.count);
      this.startBtn.innerHTML = 'CONTINUE';
      this.startBtn.removeEventListener('click', this.stopFn.bind(this));
      this.startBtn.addEventListener('click', this.startFn.bind(this));
    };

    this.clearFn = function() {
      this.stopFn();
      this.time = 0;
      this.clockface.textContent = getFormattedTime(this.time);
      this.clearBtn.disabled = true;
      this.startBtn.textContent = 'START';
      this.laps.innerHTML = '';
    };

    this.startFn = function() {
      this.count = setInterval(this.updateClockface, 100);
      this.startBtn.removeEventListener('click', this.startFn.bind(this));
      this.startBtn.addEventListener('click', this.stopFn.bind(this));
      this.clearBtn.disabled = false;
      this.startBtn.textContent = 'PAUSE';
    };

    this.lapFn = function() {
      this.laps.innerHTML += `<li>${getFormattedTime(this.time)}</li>`;
    };

    this.lapBtn.addEventListener('click', this.lapFn.bind(this));
    this.startBtn.addEventListener('click', this.startFn.bind(this));
    this.clearBtn.addEventListener('click', this.clearFn.bind(this));
    this.clearBtn.disabled = true;

  }
}

let timer = new Timer(timerBody);

document.querySelector('.timers').firstElementChild.classList.add('hidden');
