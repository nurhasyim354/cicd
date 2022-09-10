//app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/doc", (req, res) => {
  res.status(200).send("this is docs API");
});

module.exports = app;