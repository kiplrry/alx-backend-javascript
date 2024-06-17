process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (!process.stdin.isTTY) {
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is ${data}`);
  process.exit();
});
