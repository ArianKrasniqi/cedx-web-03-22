const BTN = document.getElementById('btn');

function showAlert(name) {
  alert('You just clicked the button! And you are: ' + name);
}

// BTN.addEventListener("click", function() {alert('You just clicked the button!')})
BTN.addEventListener("click", function() { showAlert('Arian') });
