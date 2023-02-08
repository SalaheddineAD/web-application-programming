const express= require("express");
const bodyParser = require('body-parser');
const path = require("path");

const app=express();
app.use(express.urlencoded({extended:false}));
// app.use()
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use('/css', express.static(path.join( __dirname,'public', 'css')));
app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    let file;
    if(hour<6||hour>18) file='/css/night.css';
    else file='/css/day.css'
    res.render('index',{'css_file':file});
});

app.post('/result', (req, res, next) => {
    let name =req.body.input_name;
    if(!name)name="Madara";
    // console.log(name);
    let age =req.body.input_age;
    if(!age)age=179;
    res.redirect("/output?name="+name+"&age="+age);
});

app.get('/output', (req, res) => {
    let name = req.query.name;
    if (!name) {
    name = "person";
    }
    let age = req.query.age;
    if (!age) {
    age = 179;
    }
    res.send(`Welcome ${name}! \n You're ${age} years old`);
});
app.listen(3000);