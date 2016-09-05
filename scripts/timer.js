var SEC = 60;
var DEFAULT_MIN = 5;

var defaultState = {
  selectedTime: DEFAULT_MIN * SEC,
  time: DEFAULT_MIN * SEC,
  timer: null,
  running: false
}

var state = defaultState;

function startTimer() {
  state.running = true;
  state.timer = setInterval(updateTime, 1000);
}

function stopTimer() {
  state.running = false;
  clearInterval(state.timer);
  state.timer = null;
  state.time = state.selectedTime;
}

function updateTime() {
  state.time--;
  if(state.time == 0) {
    stopTimer();
    state.time = state.selectedTime;
    return;
  }
}

function getTime() {
  return state.time;
}

function setTime(min) {
  state.time = min * SEC;
  state.selectedTime = state.time;
}

function isRunning() {
  return state.running;
}
