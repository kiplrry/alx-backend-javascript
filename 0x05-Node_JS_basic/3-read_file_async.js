const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const fields = {};
    let number = 0;
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.toString().split('\n');
      lines.shift();
      lines.forEach((line) => {
        if (!line) {
          return;
        }
        number += 1;
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
      resolve(data);
    });
  });
}
module.exports = countStudents;
