const express = require("express");
const routerAPi = require("./routes");

const app = express();
const port = 3000;
const env = "/api/v1";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

routerAPi(app, env);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});