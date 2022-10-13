import { students } from './data/all-data.js';


const studentList = document.getElementById('studentList');
let ul = document.createElement('ul');

function showDetails(i) {
  console.log(i);
  const t2 = document.getElementById('studentDetails');
  t2.innerHTML = students[i].dateOfBirth;
}

for (let i = 0; i < students.length; i++) {
  const li = document.createElement('li');
  li.innerHTML = students[i].firstName + ' ' + students[i].lastName;
  li.addEventListener(
    'click',
    function () {
      showDetails(i);
    },
    false
  );
  ul.appendChild(li);
}

studentList.appendChild(ul);
