const http = require('http');
const fs = require('fs');

// Solution

http.createServer((req, res) => {
    const url = req.url;

    if(url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<title><body><section><h1>Hello lad</h1></section></body></title>');
        res.write('<title><body><section><form action="/create-user" method="post"><input type="text" name="user"><button type="submit">Create user</button> name</form></section></body></title>');
        res.write('</html>');

        return res.end();
    }

    if(url === '/users') {
        res.setHeader('Content-type', 'text/html');
        

        return res.end();
    }

    if(url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);

// My attempt

const requestHandler = (res, req) => {
    const req = url.req;
    const method = url.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<title><body><section><h1>Hello lad</h1></section></body></title>');
        res.write('<title><body><section><form action="/create-user" method="post"><input type="text" name="user"><button type="submit">Create user</button> name</form></section></body></title>');
        res.write('</html>');

        if(url ===method === 'POST') {
            res.write('<html>');
            
            res.write('</html>');
        }
    }

    if(url === '/create-user') {
        console.log()
        res.write('<html>');
        res.write('<title><body><section><p></p></section></body></title>');
        res.write('</html>');
    }
}

server.listen(3000);


const http = require('http');


const server = http.createServer((res, req) => {
    const url = req.url;

    if(url === '/'){
        res.setHeader('Content-type', 'text/html');

        res.write('<html><title><bdoy><section><form caction="create-user" method="POST"><input type="text"> <button type="submit">Create user</button></form></section></bdoy></title></html>')
        return res.end();
    }

    if(url === '/users') {

    }

    if(url === '/create-user') {
        const body = [];
    }
})