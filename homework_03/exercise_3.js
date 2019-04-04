var http = require('http');
var fs = require('fs');

//xxx.jpg means any big image more than 200M which I did not push to gitHub

// Asynchronous using pipe 
http.createServer(function(req,res){
    var rs = fs.createReadStream(__dirname + '/xxx.jpg').pipe(res);
}).listen(8081);

// Synchronous using buffer
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    let image = fs.readFileSync(__dirname + '/xxx.jpg');
    res.end(image);
}).listen(8082);
// Asynchronous using buffer
http.createServer(function(req,res){
    var rs = fs.readFile(__dirname + '/xxx.jpg',function(err,data){
        if (err) throw err;
        res.end(data);
    })
}).listen(8083);