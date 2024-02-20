const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write("<h1>This is Home Page.</h1>");
        res.end();
    }
    else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h1>This is About Page.</h1>");
        res.end();
    }
    else if (url === "/content") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h1>This is Content Page.</h1>");
        res.end();
    }
    else {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(`
        <h1>Page not found.</h1>
        <a href="/">Go back to home page.</a>
        `);
        res.end();
    }
});

server.listen(5000, () => {
    console.log("server is runint in: http://localhost:5000");
});