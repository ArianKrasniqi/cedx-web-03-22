const ADD = document.getElementById('add');
const REMOVE = document.getElementById('remove');
const CITIES = document.getElementById('cities');
const DATES = document.getElementById('dates');

// 12.12.2022;11:39;Peje
const cities = [];
const dates = [];

function handleData(type) {
  if (type === 'add') {
    const data = document.getElementById('data').value;
    const dataArray = data.split(';');
    
    cities.push(dataArray[2]);
    dates.push(dataArray[0]);

    write();
  } else if (type === 'remove') {
    cities.pop();
    dates.pop();

    write();
  }
}

function write() {
  CITIES.innerText = cities.join(', ');
  DATES.innerText = dates.join(', ');
}

ADD.addEventListener('click', function() { handleData('add') })
REMOVE.addEventListener('click', function() { handleData('remove') })
