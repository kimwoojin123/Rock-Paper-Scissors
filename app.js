const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    function serverErrorLog() {
        res.writeHead(500);
        return res.end('서버오류');
    }

    if (req.url === '/' && req.method === 'GET') {
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                serverErrorLog();
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/style.css' && req.method === 'GET') {
        fs.readFile('style.css', 'utf8', (err, data) => {
            if (err) {
                serverErrorLog();
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    }
});
