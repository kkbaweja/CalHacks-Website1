var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response){
	var url1 = request.url;
	switch(url1){
		case '/':
			getFile(response, 'public/home.html', 'text/html');
			break;
		case '/about':
			getFile(response, 'public/about.html', 'text/html');
			break;
		case '/exercises':
			getFile(response, 'public/exercises.html', 'text/html');
			break;
		case '/food':
			getFile(response, 'public/food.html', 'text/html');
			break;
		case '/common injuries':
			getFile(response, 'public/common injuries.html', 'text/html');
			break;
		case '/forum':
			getFile(response, 'public/forum.html', 'text/html');
			break;
		default:
			response.writeHead();
	}
}).listen(8080);
console.log('server is running at 8080');

function getFile(response, filepath, contentType){
	fs.readFile(filepath, function(error,data){
		if(error){
			response.writeHead(500,{'Content-Type': 'text/plain'});
			response.end('500 - Internal Server Error');
		}
		if(data){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data);
		}
	});
}