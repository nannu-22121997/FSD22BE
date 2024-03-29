import express from "express";
import path from "path";

const app = express();

// app.get("/", (req, res) => {
//   res.status(200).send("<h1>Response from Home Page</h1>");
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("<h1>This is About Page</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.status(200).send("<h1>This is Contact Page</h1>");
// });

// app.get("/project", (req, res) => {
//   res.status(200).send("<h1>This is Project Page</h1>");
// });

app.use(express.static("./Expense_Tracker"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./Expense_Tracker/index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send(`
  <h1>Page not found</h1>
  <a href="/">Back to Home page.</a>
  `);
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
