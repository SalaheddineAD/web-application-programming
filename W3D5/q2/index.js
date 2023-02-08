const express= require("express");
const path = require('path');
const app=express();
app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set('views',path.join(__dirname,'views'));
app.use('/result', (req, res, next) => {
    let name =req.body.input_name;
    if(!name)name="Madara";
    let age =req.body.input_age;
    if(!age)age=179;
    res.send('Yoo '+name+"! Did you know you're "+age+" old");
});
app.use('/', (req, res, next) => {
    res.render('index');
});
app.listen(3000);