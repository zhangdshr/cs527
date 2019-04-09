var express = require('express')
var app = express()
const crypto = require('crypto');
const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;
var collection

const conn = async function () {
    const client = new MongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01')
    await client.connect();
    const db = client.db('homework01')
    collection = db.collection('data')
}

conn()

app.get('/secret',async (req,res)=>{
    var data = await collection.findOne({}, {key:1, message:1})
    res.send(data);
});

app.listen(3000, function() {
    console.log(`The server is running on port 3000`)
})