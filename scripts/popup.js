function setup() {
  var setBtn = document.querySelector('.btn-set');
  setBtn.addEventListener('click', set);
}

function set() {
  window.close();
}

document.addEventListener('DOMContentLoaded', function() {
  setup();
});
