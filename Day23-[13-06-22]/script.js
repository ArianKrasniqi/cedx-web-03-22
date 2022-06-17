const BTN = document.getElementById("submit-btn");
const BTN2 = document.getElementById("submit-btn2");

function showText(elementId, contentId) {
  const CONTENT = document.getElementById(contentId);
  const inputValue = document.getElementById(elementId).value;
  CONTENT.innerHTML = "Result: " + inputValue;
}

BTN.addEventListener("click", function () {
  showText("txt", "content");
});
BTN2.addEventListener("click", function () {
  showText("txt2", "content2");
});

let name = "Arian";

changeName();

function changeName() {
  console.log(name);
}



// function changeName(name) {
//   console.log(name);
// }

// changeName("Leke");
// console.log(name);
