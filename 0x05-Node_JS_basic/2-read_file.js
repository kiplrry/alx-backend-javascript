const fs = require('node:fs');

function countStudents(path) {
  try {
    const fields = {};
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.toString().split('\n');
    lines.shift();
    let number = 0
    lines.forEach((line) => {
      if(!line){
        return
      }
      number++
      const field = line.split(',').pop();
      const student = line.split(',').shift();
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student);
    });

    console.log(`Number of students: ${number}`);
    for (const field in fields) {
      if (fields[field]) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
