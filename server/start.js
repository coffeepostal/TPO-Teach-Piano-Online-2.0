const mongoose = require('mongoose')

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' })

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE)
const db = mongoose.connection;
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
db.on('error', (err) => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
})
db.once("open", function (callback) {
    console.log(`☎️ MongooDB Connection Succeeded`);
});

// READY?! Let's go!


// Start our app!
const app = require('./app')
app.set('port', process.env.PORT || 7777)
const server = app.listen(app.get('port'), () => {
    console.log(`🚀 Express running → PORT ${server.address().port}`)
})