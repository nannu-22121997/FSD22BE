import express from "express";
import { loginMiddleware } from "./middlewares/loginMiddleware.js";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Middlewares Options</h1>");
});

app.get("/login", loginMiddleware, (req, res) => {
  const { username } = req; // { "username" : "NaveenKumar" }
  res.status(200).send(`<h1>Welcome, ${username}</h1>`);
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
