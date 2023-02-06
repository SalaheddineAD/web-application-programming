const express= require("express");
const app=express();
const bodyParser = require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded());

app.use('/css', express.static(path.join( __dirname, 'css')));

app.get('/', (req, res, next) => {
    const date = new Date();
    const hour = date.getHours();
    res.sendFile('index.html',{root:"."});
    app.use('/mycss', express.static(path.join( __dirname, 'css','night.css')));


});
app.use('/result', (req, res, next) => {
    console.log(res.body);
    let name =req.body.input_name;
    if(!name)name="Madara";
    console.log(name);
    let age =req.body.input_age;
    if(!age)age=179;
    res.send('Yoo '+name+"! Did you know you're +"+age+" old");
});
app.listen(3000);