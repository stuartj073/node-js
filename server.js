const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // need to call this 
            // so it passed on to 
            // next middleware in line
});

console.log(routes.someText);

server.listen(3000);

// const routes = require('./routes');
// const server = http.createServer(routes.handler);