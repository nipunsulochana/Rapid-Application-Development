const express = require("express");
var bodyParser = require("body-parser");

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "\\form.html");
});
app.post("/success", urlencodedParser, (req, res) => {
  res.send(`Username:${req.body.username}<br/>
  password : ${req.body.password}<br/>
  email : ${req.body.email}<br/>
  `);
});

app.listen("8080");
