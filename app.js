//  Import the packages
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const errorHandlers = require('./handlers/errorHandlers')
//  Add additional Node packages: child process (to be used with mongoexport) and fs (access the file system)
const spawn = require('child_process').spawn
const fs = require('fs')
const path = require('path')
//  Attempting to get MongoDB posts into a CSV format that Heroku won't freak out about
const stringify = require('csv-stringify')

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' })

//  Create the app
const app = express()

//  Tell the app to use Morgan in "combined" mode, to better log HTTP requests
app.use(morgan('combined'))

//  Tell the app to use Body Parser to parse all the data as JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


//  Tell the app to use cors, a package that allows requests to be made by domains not identical to the one you're on, like the server/database/etc.
app.use(cors())

//  Import Post model
Post = require("./models/post")

// Fetch all posts
app.get('/posts', (req, res) => {
    Post.find({}, 'piece composer email', function (error, posts) {
        if (error) { console.error(error); }
        res.json({
            posts: posts
        })
    }).sort({ _id: -1 })
})

// Create new post
app.post('/posts', (req, res) => {
    const db = req.db;
    const piece = req.body.piece;
    const composer = req.body.composer;
    const email = req.body.email;
    const new_post = new Post({
        piece: piece,
        composer: composer,
        email: email
    })

    new_post.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Post saved successfully!'
        })
    })
})

// Delete a post
app.delete('/posts/:id', (req, res) => {
    const db = req.db;
    Post.deleteOne({
        _id: req.params.id
    }, function (err, post) {
        if (err)
            res.send(err)
        res.send({
            success: true
        })
    })
})

//  Export CSV
app.get('/export/:fields', (req, res) => {

    //  Setup file and filename
    const fileName = __dirname + '/files/' + req.params.fields + '.csv';
    const file = fileName.replace(',', '-')

    //  Query the DB for the fields requested
    const mongoExport = spawn('mongoexport', [
        '--uri', process.env.DATABASE,
        '--collection', 'posts',
        '--fields', req.params.fields,
        '--type', 'csv'
    ])

    res.set('Content-Type', 'text/csv')

    mongoExport.stdout.on('data', function (data) {

        if (data) {

            fs.writeFile(file, data, function (err) {

                if (err) {

                    return console.log(err);
                }

                //  Download the file
                // res.download(file);
                res.send(data);

                console.log("The file was saved!");
            });

        } else {

            res.send('mongoexport returns no data')

        }
    })
})

//  Generate and Export CSV
app.get('/csv/:fields', (req, res) => {

    //  Query the DB for the fields requested
    const mongoExport = spawn('mongoexport', [
        '--uri', process.env.DATABASE,
        '--collection', 'posts',
        '--fields', req.params.fields,
        '--type', 'csv'
    ])


    res.set('Content-Type', 'text/csv')

    mongoExport.stdout.on('data', function (data) {

        if (data) {

            res.send(data);

        } else {

            res.send(`No data was returned.`)

        }
    })
})

// TEST CSV
app.get('/csvposts', (req, res) => {
    //  Query the DB for the fields requested
    const mongoExport = spawn('mongoexport', [
        '--uri', process.env.DATABASE,
        '--collection', 'posts',
        '--fields', 'email',
        '--type', 'csv'
    ])


    // res.set('Content-Type', 'text/csv')

    mongoExport.stdout.on('data', function (data) {

        if (data) {

            res.send(data);

        } else {

            res.send(`No data was returned.`)

        }
    })
})

// Server Static Assets
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('public'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    });

}

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
    /* Development Error Handler - Prints stack trace */
    app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;