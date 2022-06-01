const http = require('http');

const express = require('express');

const app = express();

const server = http.createServer(app);

// const routes = require('./routes');

console.log(routes.someText);

// const server = http.createServer(routes.handler);

server.listen(3000);