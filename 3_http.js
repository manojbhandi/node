const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.end('Hello this is home page')

    } if (req.url == '/about') {
        res.end('Welcome to about us');
    }
    res.end(`
        <h1> Oops! </h1>
        <p>Sorry we are not able to find the page your are looking for<p>
        <a href='/'>Go Back</a>
    `);
})
server.listen(5000);