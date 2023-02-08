const express = require("express");
const path = require("path");
const app= express();
const cookieParser=require('cookie-parser');
app.set("view engine",'ejs');
app.use(express.urlencoded({extended:false}));

let data = require("./public/database.js");
var products_added=[];
app.post("/addToCart",(req,res)=>{
    const id=req.body.id;
    products_added.push(data[id]);
    res.redirect("/addToCart");
})
app.get("/addToCart",(req,res)=>{

    res.render("myProducts",{products_added});
})
app.use("/",(req,res)=>{
    res.render("index",{data});
})
app.listen(3000);