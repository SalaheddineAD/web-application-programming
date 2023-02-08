const express = require('express');
// const cookieParser= require('cookie-parser');
const session = require('express-session');
const app = express();
// app.use(cookieParser);
app.use(express.urlencoded({extended:false}));

