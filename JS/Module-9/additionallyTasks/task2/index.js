function getFormattedTime(time) {
  let date = new Date(time),
  minutes = ('0' + date.getMinutes()).slice(-2),
  seconds = ('0' + date.getSeconds()).slice(-2),
  milliseconds = Math.floor(date.getMilliseconds()/100);
  return `${minutes}:${seconds}.${milliseconds}`;
}

console.log(
  getFormattedTime(1523621052858)
); // 04:12.8

console.log(
  getFormattedTime(1523621161159)
); // 06:01.1

console.log(
  getFormattedTime(1523621244239)
); // 07:24.2
