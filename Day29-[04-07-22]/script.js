// let arr1 = [3, 5, 6]
// let arr2 = [1, 9, 2]

// for(let i = arr1.length - 1; i >= 0; i--) {
//   console.log(arr1[i])
// }

// let sum  = 0;

// for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
// }

// for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
// }

// console.log(sum)

for(let i = 0; i <= 20; i++) {
  if(i === 15) {
    continue;
  }
  console.log(i);
}

// Is Ariian in the loop

let students = ['Hana', 'Drini', 'Fitimi', 'Aroni', 'Ariani', 'Mirza', 'Rimi']
let i = 0;
for(; i < students.length; i++) {
  if (students[i] === 'Ariani') {
    console.log('We found the teacher');
    break;
  }
  console.log(students[i])
}

console.log(i)

for(let i = 0; i <= 20; i++) {
  if(i === 0) {
    console.log(`${i} -> Zero`)
  } else if (i % 2 === 0) {
    console.log(`${i} -> Cift`)
  } else {
    console.log(`${i} -> Tek`)
  }
}

for (let student of students) {
  console.log(student)
}

let detailedStudents = [
  {
    name: 'Hana',
    lastname: 'Meta',
    course: 'Java',
    role: 'Student'
  },
  {
    name: 'Drin',
    lastname: 'Gashi',
    course: 'Javascript',
    role: 'Student'
  },
  {
    name: 'Fitim',
    lastname: 'Krasniqi',
    course: 'Javascript',
    role: 'Student'
  },
  {
    name: 'Arian',
    lastname: 'Krasniqi',
    course: 'Javascript',
    role: 'Teacher'
  },
  {
    name: 'Mirza',
    lastname: 'Muric',
    course: 'Javascript',
    role: 'Student'
  }
]

for(let i = 0; i < detailedStudents.length; i++) {
  if (detailedStudents[i].role === 'Teacher') {
    console.log('We found the teacher', detailedStudents[i]);
    break;
  }
  console.log(detailedStudents[i])
}

for (let student of detailedStudents) {
  console.log('student: ', student)
  for (let key in student) {
    console.log(`Value of ${key} is: ${student[key]}`)
  }
}


//=============

// let person =  {
//   name: 'Hana',
//   lastname: 'Meta',
//   course: 'Java',
//   role: 'Student'
// }

// for (let key in person) {
//   console.log(`Value of ${key} is: ${person[key]}`)
// }

const ariansFriends = ['Fitimin', 'Mirzen', 'Hana'];
const aronsFriends = ['Mirzen', 'Rimi', 'Drinin', 'Fitimin'];
const mutualFriends = [];

for(let i = 0; i < ariansFriends.length; i++) {
  const ariansfriendName = ariansFriends[i]

  for(let j = 0; j < aronsFriends.length; j++) {
    if(aronsFriends[j] === ariansfriendName) {
      mutualFriends.push(aronsFriends[j])
    }
  }
}

console.log('mutualFriends', mutualFriends)

const numbers = [
  [2, 4, 6],
  [7, 9, 3],
  [2, 4, 6],
  [7, 9, 3],
  [2, 4, 6],
  [7, 9, 3],
]

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i])
  for(let j = 0; j < numbers[i].length; j++) {
    // console.log(numbers[i][j])
    sum += numbers[i][j];
  }
}
// console.log(sum)
