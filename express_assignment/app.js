const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

// app.get('/speak/:animal', function(req, res) {
//     if (req.params.animal == "pig") {
//         res.send("The pig says 'Oink'");
//     } else if (req.params.animal == "cow") {
//         res.send("THe cow says 'Moo'");
//     } else if (req.params.animal == "dog") {
//         res.send("The dog says 'Woof Woof!'");
//     }
// });

app.get('/speak/:animal', function(req, res) {
    let sound = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof Woof!'
    }
    let animal = req.params.animal;
    let animalsound = sound[animal];
    res.send("The " + animal + " says '" + animalsound + "'.");
})
app.get('/repeat/:greeting/:times', function(req, res) {
    let greetword = req.params.greeting;
    let repeattime = req.params.times;
    let result = "";
    for (let i = 0; i < repeattime; i++) {
        result += greetword + " "; 
    }
    res.send(result);
})

app.get('*', function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
})
app.listen(port, function() {
    console.log("The app is listening on port " + port + "!");
});