var time = 0;
var timer = null;

function setTimer() {
  timer = setInterval(updateTime, 1000);
}

function updateTime() {
  time++;
}

function getTime() {
  return time;
}
