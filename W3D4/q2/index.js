const express= require("express");
const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.get('/', (req, res, next) => {
    res.send('<form action="/result" method="post"><label id="label_name">Name <input type="text" name="input_name"></label> <label id="label_age">Age <input type="text" name="input_age"></label><button type="submit">Submit</button></form>');
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