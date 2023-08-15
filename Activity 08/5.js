const express = require("express");

const app = express();

app.use(function (req, res) {
  res.status(404).end("error");
});

app.get("/somepage/", (req, res) => {
  res.send(`Foo Bar`);
});

app.listen("8080");
