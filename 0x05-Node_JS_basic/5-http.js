const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const path = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const fields = {};
    let number = 0;
    let ans = '';
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

      ans += `Number of students: ${number}\n`;
      const list = [];
      for (const field in fields) {
        if (fields[field]) {
          list.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
      ans += list.join('\n');
      resolve(ans);
    });
  });
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }
  if (req.url === '/students') {
    const ans = await countStudents(path);
    res.write('This is the list of our students\n');
    res.end(ans);
  }
  res.end();
});

app.listen(port, hostname);
module.exports = app;
