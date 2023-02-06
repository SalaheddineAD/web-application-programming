const express = require('express');
const app = express();
app.listen(3000, () => {
console.log('Your Server is running on 3000');
})

app.set('port', process.env.PORT || 3000);
const port = app.get('port');
app.set('env', 'development');
console.log(app.get('env'));

// app.use((req, res, next) => {
//     console.log('This is always run');
//     next();
// });
// app.use('/add-product', (req, res, next) => {
//     console.log('In the middleware!');
//     res.send('<h1>The "Add Product" Page</h1>');
// });
// app.use('/', (req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>Hello from Express</h1>');
// });
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<form action="/product" method="post"><input name="title"><button type="submit">Submit</button></form>');
});
app.use("/product", (req, res, next) => {
    console.log(req.body); // { title: 'book' }
    res.redirect('/');
});
