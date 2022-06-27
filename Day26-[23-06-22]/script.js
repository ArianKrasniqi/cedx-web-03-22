// const persons = ['Rimi', 'Leka'];
// const person = persons.push('Arian');
// const removedPerson = persons.pop();
// removedPerson = persons.pop();
// console.log(person);
// console.log(removedPerson);

const person = {
  name: 'Arian',
  lastname: 'Krasniqi',
  'age': 26,
  city: 'Peje',
  'place of birth': 'Peje',
  worksAt: 'cedx',
};

const worksAt = person.worksAt;

console.log('worksAt variable', worksAt);

console.log('person.age', person.age)

console.log('person', person);

person.hairColor = 'Brown';

// delete person.lastname;

person['likes football'] = true;

delete person['place of birth'];

console.log(person.name);
console.log("lastname as string in key: ", person['lastname']);

const key = 'worksAt';

console.log('key', key)
// console.log('person.key', person.'worksAt') => Doesn't work
// console.log('person[key]', person['worksAt']) => Works
console.log('person.key', person.key)
console.log('person[key]', person[key])

person.age = 36;

person['likes football'] = false;

person[key] = 'Xogito';

// let city = 'Peje';

// console.log('city', city);

// city = 'Prishtine';

// console.log('city2', city);

// a = b
// a == b
