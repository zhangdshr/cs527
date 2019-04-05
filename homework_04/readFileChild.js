const fs = require('fs')
const path = require('path')
var readfile = function(pathName){
    const readStream = fs.createReadStream(pathName);
    readStream.on("data", (data) => {
        process.send(data.toString());
    })    
    readStream.on("end", (end) => {
        process.send("duosi");
    })
}
process.on('message', file =>{
    var filename = path.join(__dirname, file);
    readfile(filename);
})