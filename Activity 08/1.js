const express = require("express");

const app = express();

app.get("/greet/:name", (req, res) => {
  res.send(`Greetings ${req.params.name}`);
});

app.listen("8080");
