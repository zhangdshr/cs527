
var express = require('express')
var app = express()

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;

const conn = async function () {
    const client = new MongoClient('mongodb+srv://ethan:000@cs572-9wstg.mongodb.net/test')
    await client.connect();
    const db = client.db('homework08')

    // //q1
    // db.collection('restaurants').find({}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    // //q2
    // db.collection('restaurants').find({}).project({address: 0, grades: 0}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    // //q3
    // db.collection('restaurants').find({}).project({_id: 0, address: 0, grades: 0}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    // //q4
    // db.collection('restaurants').find({}).project({'_id': 0, 'restaurant_id': 1, 'name': 1, 'district': 1, 'address.zipcode': 1}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })
    
    // //q5
    // db.collection('restaurants').find({'district': 'Bronx'}).project({'_id': 0}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    // //q6
    // db.collection('restaurants').find({'district': 'Bronx'}).limit(5).project({'_id': 0}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    // //q7
    // db.collection('restaurants').find({'district': 'Bronx'}).skip(5).limit(5).project({'_id': 0}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    // //q8
    // db.collection('restaurants').find({'address.coord': {$lt: -95.754168}}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    // //q9
    // db.collection('restaurants').find({"cuisine": {$ne: 'American '},"grades.score": {$gt: 70}, "address.coord": {$lt: -65.754168}}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    // //q10
    // db.collection('restaurants').find({name: { $regex: /^Wil/ }}, {_id:0, restaurant_id:1, name:1, district:1, cuisine:1}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    // //q11
    // db.collection('restaurants').find({name: { $regex: /ces$/ }}, {_id:0, restaurant_id:1, name:1, district:1, cuisine:1}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    // //q12
    // db.collection('restaurants').find({name: { $regex: /Reg/ }}, {_id:0, restaurant_id:1, name:1, district:1, cuisine:1}).toArray(function(err, docArr) {
    //     if (err) throw err
    //     docArr.forEach(doc => {
    //         console.dir(doc)
    //     });
    // })

    //q13
    //find({district: 'Bronx', cuisine: {$in: ['American', 'Chinese'] }})

    //q14
    //find({district: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] }})

    //q15
    //find({district: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] }})

    //q16
    //find({"grades.score": {$lte: 10}})

    //q17
    //find({"address.coord.1": {$gt: 42, $lt: 52}})

    //q18
    //find({}).sort({"name": 1})

    //q19
    //find({}).sort({"name": -1})

    //q20
    //find({}).sort({cuisine: 1, district: -1})

    //21
    //find({"address.street": {$exists: false}})

    //22
    //find({'address.coord': {$type: 'double'}})

    //23
    //find({name: /^Mad/})

}

conn()




