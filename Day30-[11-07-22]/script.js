let fruits = ['Apple', 'Banana', 'Strawberry'];
let fruitsText = fruits.join('  ***  ');

console.log(fruitsText);

let time = '21:32:17'
let timeArray = time.split(':'); // [21, 32, 17]

console.log(timeArray.join('-'))

// Input ne HTML
// Buttonat ne HTML
// Paragrafat ne HTML

// Selektojme Buttonat
// Shkojme Event Listeners ne Buttona

// Ne click e thirim nje funksion i cili brenda merr vleren e inputit
// Nese eshte kliku butoni shto, vleren e ndajme me split ne baze te ;
// E shtojme array[0] tek nje array dates
// E shtojme array[2] tek nje array cities
// I shfaqim ne paragrafe me .innerHTML duke perdorur .join(',')


let fruits2 = ['Apple', 'Banana', 'Strawberry', 'Kiwi', 'Orange'];
// fruits2.splice(1, 0, 'Kiwi', 'Orange');
// let removedElements = fruits2.splice(1, 1, 'Kiwi', 'Orange');

let newFruits = fruits2.slice(1, 3)
console.log(fruits2);
console.log(newFruits)

function printFruit(item, index, array) {
  console.log(`This fruit: ${item} had index: ${index} in ${array.toString()}`);
}

fruits2.forEach(printFruit)

const tax = 0.17;
const products = [2.5, 3, 7, 9, 13];

const productsWithTaxes = products.map(function(price) {
  return parseFloat((price * (1 + tax)).toFixed(2));
})

console.log(productsWithTaxes)

function changeFruit(fruit) {
  return fruit + '****';
}

const fruits20 = fruits2.map(changeFruit)

console.log(fruits20);

const ages = [13, 15, 21, 30];

const found = ages.find(function(item) {
  return item > 18;
})

console.log(found)

const students = [
  {
    name: 'Aron',
    role: 'Student',
    age: 23
  },
  {
    name: 'Drin',
    role: 'Student',
    age: 15
  },
  {
    name: 'Leke',
    role: 'Student',
    age: 15
  },
  {
    name: 'Arian',
    role: 'Teacher',
    age: 26
  },
  {
    name: 'Mirza',
    role: 'Student',
    age: 24
  }
]

// function removeStudentUnder18(student, index) {
//   if ((student.role === 'Student' && student.age < 18) || student.role === 'Teacher') {
//     students.splice(index, 1)
//     return true;
//   } else return false
// }

// let youngStudent = students.find(removeStudentUnder18)

// youngStudent = students.find(removeStudentUnder18)

// youngStudent = students.find(removeStudentUnder18)
// console.log(youngStudent)
// console.log(students)

function getCorrectStudents(student, index) {
  if(student.age >= 18 && student.role === 'Student') {
    return true
  } else {
    return false
  }
}

let allowedStudents = students.filter(getCorrectStudents)
console.log(allowedStudents)
