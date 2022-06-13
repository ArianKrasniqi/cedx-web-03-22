console.log('We are running the script...');

function printSmth(sentence, number, count) {
  // alert('I am showing this alert using a function');
  console.log(sentence + " : " + number + " : " + count);
};

printSmth("This is our first argument", 10);

function sum(number1, number2) {
  return number1 + number2;
  console.log('After return'); // Unreachable code detected.
}

let nr1 = 3;
let nr2 = 6;

const value = sum(nr1, nr2);

console.log("value", value);
console.log("sum(3, 6)", sum(3, 6))
console.log(typeof value);

let chocolatePrice = 2;
let milkPrice = 1.7;
let tax = 0.17;

// ESlint
function calculateTax(productPrice) {
  // return productPrice * (1 + tax); -> Shorthand
  let value = productPrice * (1 + tax);
  return value;
}

const chocolatePriceWithTaxes = calculateTax(chocolatePrice);
const milkPriceWithTaxes = calculateTax(milkPrice);
console.log('chocolatePriceWithTaxes', chocolatePriceWithTaxes);
console.log('milkPriceWithTaxes', milkPriceWithTaxes.toFixed(2));

function showInConsole(sentence) {
  console.log(sentence);
}

showInConsole("Fjalia e pare");
showInConsole("Fjalia e dyte");
