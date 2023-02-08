const express = require('express'); 
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.set("/css",express.static(path.join(__dirname,"public","css")));
app.get('/', (req, res) => {
 const date = new Date();
 const hour= date.getHours()
 let cssFile;
 if(hour<6 ||hour>18) cssFile="/css/night.css";
 else cssFile="/css/day.css";
console.log(cssFile);
 res.render("index", {
 css_file: cssFile,
 time : hour
 });
});
app.listen(3000);
