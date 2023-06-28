const express = require('express') //handles node.js server 
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const config = require('./config')
const mongouri = config.databaseUrl
mongoose.connect(mongouri);

mongoose.connection.on('connected', () => {
    console.log("Connected to mongo instance");
});
mongoose.connection.on('error', err => {
    console.error("Error connecting to mongo", err);
})

//create collection users 
// insert into collection document uche, password, email, nnorom db.users.insertOne({"name": "Uche", "lastname": "Nnorom", email": "email", "pwd": "password"})
// db.getCollection('users').findOne({email: "var useremail"})
//change uche = emmanuel db.getCollection('users').updateOne({name: "Uche"}, {name: "Emmanuel"})
// delete uche db.getCollection('users').deleteOne({name: "Uche"})


// Login
app.get('/login', (req, res) => {
  //Search database for user 
  //if user exist 
  //respond you are logged in 
  //respond create an account
  res.send('hello world')
})

app.post('/createUser', (req, res) => {
    //receive user input
    //send to database
    //create new user in database
    //respond you now have an account
})

app.get('/userinfo', (req, res) => {
    /*
    Search database for user
    return user's details
    */
    res.send("Here is your profile picture.");
})

app.post("/deleteAccount", (req, res) => {
        /*
    Search database for user
    delete user's account
    */
    res.send("You are account has been deleted");
})


app.listen(port, function() {
    console.log("Server has started on port: " + port);
})