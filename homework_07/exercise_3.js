var express = require('express')
var app = express()

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;
var collection

const conn = async function () {
    const client = new MongoClient('mongodb+srv://ethan:000@cs572-9wstg.mongodb.net/test')
    await client.connect();
    const db = client.db('homework07')
    collection = db.collection('lectures')
}

conn()

app.get('/lectures', async function (req, res) {
    var data = await collection.find().toArray()
    res.send(data);
});

app.get('/lectures/:id', async function (req, res) {
    var data = await collection.findOne({ _id: mongo.ObjectID(req.params.id)})
    res.send(data);
});

app.post("/lectures", async (req, res) => {
    const data = await collection.insert(req.body);
    res.send(data);
});

app.delete("/lectures/:id", async (req, res) => {
    await collection.deleteOne({ _id: mongo.ObjectID(req.params.id )});
    res.send(true);
});

app.put("/lectures/:id", async (req, res) => {
    const data = await collection.updateOne({ _id:  mongo.ObjectID(req.params.id) }, {$set: req.body });
    res.send(data);
});

app.post("/search", async (req, res) => {
    const searchResultCursor = await collection.find({ name: { $regex: req.query.q}});
    const searchResult = await searchResultCursor.toArray();
    res.send(searchResult);
});

app.listen(3000, function() {
    console.log(`The server is running on port 3000`)
})
    // client.connect(function (err) {
        

    //     switch (tag) {
    //         case 'lectures':
    //             collection.find().toArray(function (err, docArr) {
    //                 if(err) {
    //                     throw err
    //                 }
    //                 docArr.forEach(function (doc) {
    //                     console.log(doc)
    //                     return doc
    //                 })
    //                 client.close()
    //             })
    //             break;
    //         default:
    //             break;
    //     }
    
    //     console.dir('done')
    
        // collection.findOne({course: "cs401"}, function (err, doc) {
        //     console.dir(doc)
        //     client.close()
        // })
    
        // collection.insert({course: 'cs582', lecture: 'ML'}, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document inserted");
        //     client.close()
        // })
    
        // collection.updateOne({lecture: 'ML'}, {$set:{course: 'cs582', lecture: 'ML'}}, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document updated");
        //     client.close()
        // })
    
        // collection.deleteOne({lecture: 'ML'}, function(err, res) {
        //     if (err) throw err;
        //     console.log("1 document delete");
        //     client.close()
        // })
    // })




