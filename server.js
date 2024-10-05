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

//middleware
app.set('view engine', 'ejs') //lets us setup ejs (templating for html)
app.use(express.static('public')) //setting up a folder to hold our css/main.js. Lets our app sitting on heroku, serve up some files in public folder. It's the VIEWS.      
app.use(express.urlencoded({extended:true})) //helps us parse URLs
app.use(express.json()) //help express parse JSON and pull it apart and get what we need from it
app.use(cors()) //takes care of cors errors. (sets the cross origin access policy)

    //create PORT
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running on port`)
    })