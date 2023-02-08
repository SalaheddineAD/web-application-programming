const express = require("express");
const path = require("path");
const app= express();
app.set("view engine",'ejs');

let data = require("./public/database.js");
app.use("/",(req,res)=>{
    // for(let element)
    console.log(data.item1.name);
    res.render("index",{data});
})
app.listen(3000);