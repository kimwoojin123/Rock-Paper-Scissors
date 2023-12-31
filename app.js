const http = require('http');
const fs = require('fs');
const url = require('url');

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
    } else if (req.url === '/index.js' && req.method === 'GET') {
        fs.readFile('index.js', 'utf8', (err, data) => {
            if (err) {
                serverErrorLog();
            }
            res.writeHead(200, { 'Content-Type': 'aplication/javascript' });
            res.end(data);
        });
    } else if (req.url === '/win.html' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('win.html', 'utf8', (err, data) => {
            if (err) {
                serverErrorLog();
            }
            res.end(data);
        });
    } else if (req.url === '/lose.html' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('lose.html', 'utf8', (err, data) => {
            if (err) {
                serverErrorLog();
            }
            res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('서빙 오류');
    }
    console.log(req.url);
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});
