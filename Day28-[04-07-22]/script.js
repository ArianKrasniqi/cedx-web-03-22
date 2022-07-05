let fruits = ['Apple', 'Banana', 'Kiwi', 'Orange', 'Lemon', 'Peach'];
// Apple, Banana, Kiwi, Orange, Lemon, Peach
let text = '';

// text = text + fruits[0] + ", " + fruits[1] + ', ' + fruits[2]
text = text + "Arian";
// Arian

text = text + " Student"
// Arian Student

let name = "Arian";

if (name) {

}

let i = 0;
console.log('Loop is stating');
while(i <= 20) {
  console.log(i);
  i++;
}
console.log('Loop is finished');


let winningNumber = 7;
const MIN = 1;
const MAX =10;
let userValue = 0;

// do {
//   userValue = prompt('Shtypni numrin: ');
//   // isNaN("Arian") // True
//   // isNaN(7) // False
//   if(isNaN(userValue)) {
//     alert('Ju nuk keni shtypur numer')
//   }

//   if(parseInt(userValue) < MIN || parseInt(userValue) > MAX) {
//     alert(`Ju jeni jasht vlerave ${MIN} dhe ${MAX}`);
//   }
  
// } while(parseInt(userValue) !== winningNumber);

for (let i = 0; i < 6; i++) {
  console.log(i);
}

let fruitsText = '';

for (let i = 0; i < fruits.length; i++) {
  if (i === fruits.length - 1) {
    fruitsText += fruits[i] + ".";
  } else {
    fruitsText += fruits[i] + ", ";
  }

  // Shorthand
  // fruitsText += fruits[i] + (i === fruits.length - 1 ? '.' : ', ');


  console.log("I ", fruitsText);
}

console.log("O ", fruitsText);
