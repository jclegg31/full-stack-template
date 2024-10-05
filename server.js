const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config() 
 
let db, 
    dbConnectionString = process.env.DB_STRING, //gets string from env file
    dbName = 'star-trek-api',
    collection

//just establishing connection, not sending data back and forth so you don't need req, res
MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('connected to da database')
        db = client.db(dbName)
        collection = db.collection('alien-info')
    })