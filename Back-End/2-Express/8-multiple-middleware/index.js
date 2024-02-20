import express from "express";
import { middlewareOne } from "./middlewares/middlewareOne.js";
import { middlewareTwo } from "./middlewares/middlewareTwo.js";
import { middlewareThree } from "./middlewares/middlewareThree.js";
const app = express();
// app.use()
app.use([middlewareOne, middlewareTwo, middlewareThree]);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Multiple Middlewares</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>This is About Page</h1>");
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
