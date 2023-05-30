const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
	console.log('request made');
});

server.listen(port, 'localhost', () => {
	console.log(`listening for request on port ${port}`)
});