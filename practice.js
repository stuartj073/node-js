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


const fetchData = () => {
    const promise = new Promise((resolve, reject) => {        
        setTimeout(() => {
            resolve('Done');
        }, 1500);
    });
    return promise;
};


setTimeout(() => {
    console.log('Timer is done');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text);
    })
}, 2000);

console.log('Hello');