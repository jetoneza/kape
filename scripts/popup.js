var bgpage = chrome.extension.getBackgroundPage();

function set() {
  bgpage.setTimer();
  refreshDisplay();
}

function refreshDisplay()
{
  var time = bgpage.getTime();
  document.querySelector('.time').innerHTML = time;
  refreshDisplayTimeout = setTimeout(refreshDisplay, 100);
}

function load() {
  refreshDisplay();
}

document.addEventListener('DOMContentLoaded', function() {
  load();
  document.querySelector('.btn-set').addEventListener('click', set);
});
