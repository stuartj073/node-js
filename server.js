const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
        // MAKE SURE RETURN IS HERE
        // OR ELSE THERE WILL BE
        // AN ERROR
    }

    if(url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        // res.writeHead(302, {});
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('</html>');
    res.end();
});

http.listen();
