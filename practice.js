const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'test/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><form method="POST" action="/message"><input type="text" name="message"><button type="sumit">Submit</button> </form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY TEXT');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

});

server.listen(3000);