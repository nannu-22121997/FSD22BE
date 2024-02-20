const http = require("http");
const { readFileSync } = require("fs");

const htmlpage = readFileSync("./Expense_Tracker/index.html");
const styleSheet = readFileSync("./Expense_Tracker/style.css");
const scriptFiles = readFileSync("./Expense_Tracker/script.js");
const backgroundImage = readFileSync("./Expense_Tracker/Images/expenses.jpg")

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(htmlpage);
        res.end();
    }
    else if (url === "/style.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(styleSheet);
        res.end();
    }
    else if (url === "/script.js") {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.write(scriptFiles);
        res.end();
    }
    else if (url === "/Images/expenses.jpg") {
        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.write(backgroundImage);
        res.end();
    }
    else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Page not found.</h2>");
        res.end();
    }
});

server.listen(5000, () => {
    console.log("Server is running in: http://localhost:5000");
})