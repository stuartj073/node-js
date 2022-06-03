const express = require('express');

const router = express.Router(); // mini express app

router.get('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit product</button></form>')
});

router.listen('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = Router;