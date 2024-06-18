const { createServer } = require('node:http')

const hostname = '127.0.0.1';
const port = 8000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world')
})
server.listen(port, hostname, ()=> {
    console.log(`server running at ${hostname}:${port}`)
})