const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    function serverErrorLog() {
        res.writeHead(500);
        return res.end('서버오류');
    }
});
