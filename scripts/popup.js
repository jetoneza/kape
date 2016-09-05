var bgpage = chrome.extension.getBackgroundPage();
var refresh = true;

function set() {
  bgpage.startTimer();
  refresh = true;
  setActions();
  refreshDisplay();
}

function stop() {
  bgpage.stopTimer();
  setActions();
  updateDisplay();
  refresh = false;
}

function formatDigit(num) {
  return num.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
}

function formatTime(time) {
  var min = Math.floor(time / 60);
  var sec = time % 60;
  return formatDigit(min) + ":" + formatDigit(sec);
}

function refreshDisplay()
{
  updateDisplay();
  if(refresh) {
   refreshDisplayTimeout = setTimeout(refreshDisplay, 100);
  }
}

function updateDisplay() {
  var time = bgpage.getTime();
  document.querySelector('.time').innerHTML = formatTime(time);
}

function load() {
  setActions();
  refreshDisplay();
}

function setActions() {
  var isRunning = bgpage.isRunning();
  document.querySelector('.btn-set').style.display = isRunning ? "none" : "inline-block";
  document.querySelector('.time-select').style.display = isRunning ? "none" : "inline-block";
  document.querySelector('.btn-stop').style.display = isRunning ? "block" : "none";
}

function select(e) {
  bgpage.setTime(parseInt(e.target.value));
  updateDisplay();
}

document.addEventListener('DOMContentLoaded', function() {
  load();
  document.querySelector('.btn-set').addEventListener('click', set);
  document.querySelector('.btn-stop').addEventListener('click', stop);
  document.querySelector('.time-select').addEventListener('change', select);
});
