const students = ["Rimi", "Leka", "Dioni", 10, false];

console.log(students);

console.log(students[0]);

console.log(students[5]); // Undefined

students[1] = "Hana";

console.log('students changed to Hana: ', students);

students[5] = "Drini";

// students[10] = "Leke";

students[students.length] = "Leke";
// console.log(students[students.length - 1]) // Get Last Element in Array

console.log(students.at(-2));

const pushResponse = students.push("Aron");

const removedStudent = students.pop();

const newStudents = students.unshift('Arian');

const removedStudentInBeginnig = students.shift();

students.push("Mirza", "Aron", "Fitimi");

console.log('typeof students', typeof students);
console.log('isArray', Array.isArray(students))

let classes = [
  ["Design Student 1", "Design Student 2", "Design Student 3"],
  ["Hana", "Drin", "Dioni", "Rimi", "Leke"],
  ["Java St 1", "Java St 2"],
]

const studentRimi = classes[1][3];

// const BTN = document.getElementById('btn');

// function greet(name) {
//   alert('Hi I am: ' + name);
// }

// BTN.addEventListener('click', function() { greet(document.getElementById('inpt').value) }() );


function mbledhja(num1, num2) {
  console.log("Mbledhja: ", num1 + num2);
}

function zbritja(num1, num2) {
  console.log("Zbritja: ", num1 - num2);
}

function shumezimi(num1, num2) {
  console.log("Shumezimi: ", num1 * num2);
}

function pjestimi(num1, num2) {
  console.log("Shumezimi: ", num1 / num2);
}

function kalkulo(num1, num2) {
  mbledhja(num1, num2);
  zbritja(num1, num2);
  shumezimi(num1, num2);
  pjestimi(num1, num2);
}

kalkulo(10, 5)
kalkulo(20, 5)
kalkulo(30, 6)
