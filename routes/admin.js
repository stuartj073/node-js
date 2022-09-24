const path = require('path');

const express = require('express');

const router = express.Router(); // mini express app


// /admin/add-product => GET
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})

// THERE CAN BE TWO /admin/add-product ROUTES
// FOR TWO DIFFERENT ROUTER URLS, IF THEY
// HAVE DIFFERENT ACTIONS (GET, POST)

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;