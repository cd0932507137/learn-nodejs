var http = require('http');
http.createServer((require, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('hi hi josh');
  response.end();
}).listen(8080);