const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	let path = './views';
	switch(req.url) {		// simple url routing
		case '/':
			path += 'index.html';
			res.statusCode = 200;
			break;
		case '/about':
			path += 'about.html';
			res.statusCode = 200;
			break;
		case '/about-me':		// redirects
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			res.end();
			break;
		default:
			path += '404.html';
			res.statusCode = 404;
			break;
	}

	//set header content type
	res.setHeader('Content-Type', 'text/html');

	//send an html file
	fs.readFile(path, (err, data) => {
		if(err) {
			console.log(err);
			res.end();
		}else {
			// res.write(data);
			res.end(data);
		}
	});
	
});

server.listen(port, 'localhost', () => {
	console.log(`listening for request on port ${port}`)
});