const path = require('path');

const http = require('http');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

const express = require('express');

app.use(bodyParser.urlencoded({extended: false})); // registers middleware

const app = express();

const server = http.createServer(app);

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // need to call this 
            // so it passed on to 
            // next middleware in line
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from express!</h1>');
})

app.use('/admin', adminRoutes); // adds /admin to router
                                // url in admin.js
app.use(shopRoutes); // Order matters

app.use((req, resp, next) => {
    res.status(404).sendFile((path.join(__dirname, 'views', '404.html')));
});

server.listen(3000);