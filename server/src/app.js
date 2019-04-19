//  Import the packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//  Create the app
const app = express()
//  Tell the app to use Morgan in "combined" mode, to better log HTTP requests
app.use(morgan('combined'))
//  Tell the app to use Body Parser to parse all the data as JSON
app.use(bodyParser.json())
//  Tell the app to use cors, a package that allows requests to be made by domains not identical to the one you're on, like the server/database/etc.
app.use(cors())

//  Import jsonfile package
const jsonfile = require('jsonfile')

app.get('/posts', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
})

app.post('/posts', (req, res) => {
    //  Assign JSON file to use
    const file = './src/data.json'

    // var piece = req.body.piece;
    // var composer = req.body.composer;
    // var email = req.body.email;

    //  Create new post variables
    // var newPost = `{"piece": "New Piece Title", "composer": "New Composer Name", "email": "other@domain.com"}`

    //  Use jsonfile to read, and append, the JSON file
    jsonfile.readFile(file, function (err, data) {
        //  Kick out the errors, if there are any
        if (err) console.error(err)

        console.dir(data)
        //  Push the new data into the JSON file
        data.entries.push(req.body)
        console.log(data)

        //  Save the JSON file
        jsonfile.writeFile(file, data, function (err) {
            //  Kick out the errors, if there are any
            if (err) console.error(err)
            console.log('🚀 JSON File saved 🚀')
        })

        //  Test to see if HTTP request was sent correctly
        res.send({
            success: true,
            message: 'Post saved successfully!'
        })
    })
})

app.listen(process.env.PORT || 8081)