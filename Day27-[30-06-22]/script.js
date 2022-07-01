const BTN = document.getElementById('btn');
const RESULT = document.getElementById('result');

function handleClick(name) {
  const inputValue = document.getElementById('inpt').value;
  RESULT.innerHTML = inputValue + " " + name
}

BTN.addEventListener("click", function() { handleClick('Ariani') })

// console.log('4' == 4);
// console.log(0 == false);

// console.log(4 === '4');
// console.log(0 === false);

// function checkAge(name, age, gender) {
//   // if (gender === 'F') {
//   //   i_e = 'e'
//   // }
//   let i_e = gender === 'F' ? 'e' : 'i'; //Short hand - Better practice

//   if (age >= 18 && age < 65) {
//     console.log(`${name} eshte ${i_e} rritur`);
//   } else if (age >= 65) {
//     console.log(`${name} eshte ${i_e} pensionuar`);
//   } else if (age < 18) {
//     console.log(`${name} eshte ${i_e} mitur`);
//   } else {
//     console.log('Mosha eshte gabim')
//   }
// }

// checkAge('Ariani', 26, 'M');
// checkAge('Rimi', 22, 'M');
// checkAge('Leka', 'M', 'M');
// checkAge('Hana', 19, 'F');

function mbledhja (nr1, nr2) {
  let result = nr1 + nr2;
  console.log('Mbledhja: ' + result);
}

function zbritja (nr1, nr2) {
  let result = nr1 - nr2;
  console.log('Zbritja: ' + result);
}

function shumezimi (nr1, nr2) {
  let result = nr1 * nr2;
  console.log('Shumezimi: ' + result);
}

function pjestimi (nr1, nr2) {
  let result = nr1 / nr2;
  console.log('Pjestimi: ' + result);
}

function kalkulo(nr1, nr2) {
  mbledhja(nr1, nr2);
  zbritja(nr1, nr2);
  shumezimi(nr1, nr2);
  pjestimi(nr1, nr2);
}

// mbledhja(10, 5);
// shumezimi(10, 5);
// pjestimi(10, 5);
// zbritja(10, 5);
kalkulo(10, 5);


// mbledhja(20, 10);
// shumezimi(20, 10);
// pjestimi(20, 10);
// zbritja(20, 10);
kalkulo(20,10);