const BTN = document.getElementById('btn');
const CONTENT = document.getElementById('content');

function showContentFromInput() {
  const inputValue = document.getElementById('txt').value;
  CONTENT.innerHTML = inputValue;
}

BTN.addEventListener("click", showContentFromInput);
