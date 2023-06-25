const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// Login
app.get('/login', (req, res) => {
  //Search database for user 
  //if user exist 
  //respond you are logged in 
  //respond create an account
  res.send('hello world')
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