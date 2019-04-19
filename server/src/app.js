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


app.get('/posts', (req, res) => {
    res.send(
        [{
            title: "Hello World!",
            description: "Hi there! How are you?"
        }]
    )
})

app.listen(process.env.PORT || 8081)