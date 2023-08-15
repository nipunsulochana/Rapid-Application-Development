const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\inputs.html");
});

app.get("/value", (req, res) => {
  let value = 0;
  switch (req.query.operator) {
    case "+":
      value = parseInt(req.query.a) + parseInt(req.query.b);
      break;
    case "-":
      value = parseInt(req.query.a) - parseInt(req.query.b);

      break;
    case "/":
      value = parseInt(req.query.a) / parseInt(req.query.b);

      break;
    case "*":
      value = parseInt(req.query.a) * parseInt(req.query.b);

      break;

    default:
      break;
  }
  res.send(`${value}`);
});

app.listen("8080");
