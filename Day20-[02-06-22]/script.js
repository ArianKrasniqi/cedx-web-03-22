// let text = "This isn't a number, but \\n that's a \"string\"";

let text = `This isn't a number, but that's a "string"`;

let name = "Aron";
let lastname = "Krasniqi";
const placeOfBirth = "Peje";

let sentence = `I am ${name} ${lastname}, 
and I was born in:
 ${placeOfBirth}`
let sentence2 = "I am " + name + " " + 
lastname + 
", and I was born in " + 
placeOfBirth;

console.log(sentence)
console.log(sentence2)

let a = 5;
let b = 7;
let c = 5;

console.log(a == b)
console.log(a == c)

console.log(typeof sentence)
console.log(typeof b)
console.log(typeof (a == b))

const num1 = 13;
const num2 = 4;
const sum = num1 + num2;

const sentenceCalculation = `Adding ${num1} and ${num2} gives ${sum}`

let sentence1 = "Arian"
let sentence12 = "Arian12"

let s1 = new String("Arian")
let s2 = new String("Arian")
console.log(s1 == s2)

console.log(`length of ${sentence1} is: ` + sentence1.length);

const studentAt = "I am student at cedx";
const center = studentAt.substr(5, 9);
console.log(center);

let textR = "Web Programming Course";
console.log(textR)
let newTextR = textR.replace("Course", "Training")
console.log(newTextR)

let textRUpperCase = textR.toUpperCase();
console.log(textRUpperCase)

let textRLowerCase = textRUpperCase.toLocaleLowerCase();
console.log(textRLowerCase)

let email = "    ariian   krasniqi@gmail.   com   ";
console.log(email.trim())

let value1 = "cedX";
let value2 = "course";
const merged = value1.concat("  ", value2, " ", email);
console.log('merged', merged)

const x = merged[3];
console.log('x', x)
