const express= require("express");
const app=express();
const bodyParser = require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded());

app.use('/css', express.static(path.join( __dirname, 'css')));

app.get('/', (req, res, next) => {
    res.send('<form action="/result" method="post"><label id="label_name">Name <input type="text" name="input_name"></label> <label id="label_age">Age <input type="text" name="input_age"></label><button type="submit">Submit</button></form>');
});

app.use('/result', (req, res, next) => {
    res.redirect('/output');
});
app.get('/output', (req, res, next) => {
    let name = req.query.name;
    if (!name) {
    name = "person";
    }
    let age = req.query.age;
    if (!age) {
    age = 179; 
    }
    res.send("Welcome ${name}! \n You're ${age} years old"); //`


});
app.listen(3000);