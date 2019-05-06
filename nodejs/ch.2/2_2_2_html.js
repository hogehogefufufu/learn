const http = require('http');
const fs   = require('fs');

var server = http.createServer(getFromClient);

server.listen(8080);
console.log('start!');

function getFromClient(req,res){
    request = req;
    response = res;
    fs.readFile('./2_2.htm', 'UTF-8',
        function(error, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
            console.log("200 OK");
        }
    );

}
