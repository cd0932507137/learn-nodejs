var http = require('http');
http.createServer((request, response) => {
  console.log(request.url);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('hi hi josh');
  response.end();
}).listen(8080);