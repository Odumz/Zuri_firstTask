// add http module
const http = require('http');

// create a server
const server = http.createServer(function(req, res) {
    // Headers
    res.writeHead(200, { 'Content-Type':'text/html' });

    // send back some info
    res.end(`
        <html>
            <body style="background: #000; text-align: center; color: #EDC9AF; margin-top: 20px;">
                <h1>Welcome to Zuri Internship</h1>
                <p>This is a html response from my server</p>
            </body>
        </html>
    `);
});

// create a port
server.listen(5023, '127.0.0.1');

console.log('Bhringraj server created');